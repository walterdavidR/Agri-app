// src/modules/tareas/TareaForm.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getTareaById,
  createTarea,
  updateTarea,
  getAllLotes,
  getAllUsuarios,
} from "../../api/endpoints";
import { Input } from "../../components/common/Input";
import { Select } from "../../components/common/Select";
import { Button } from "../../components/common/Button";

const estados = [
  { value: "pendiente", label: "Pendiente" },
  { value: "en_proceso", label: "En Proceso" },
  { value: "finalizada", label: "Finalizada" },
];

export default function TareaForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tarea, setTarea] = useState({
    nombre: "",
    descripcion: "",
    lote_id: "",
    operario_id: "",
    estado: "pendiente",
  });

  const [lotes, setLotes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getAllLotes().then(setLotes);
    getAllUsuarios().then((users) =>
      setUsuarios(users.filter((u) => u.rol === "operario"))
    );
    if (id) {
      getTareaById(id).then(setTarea);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTarea({ ...tarea, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateTarea(id, tarea);
    } else {
      await createTarea(tarea);
    }
    navigate("/tareas");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{id ? "Editar Tarea" : "Nueva Tarea"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Nombre" name="nombre" value={tarea.nombre} onChange={handleChange} required />
        <Input label="Descripción" name="descripcion" value={tarea.descripcion} onChange={handleChange} />
        <Select
          label="Lote"
          name="lote_id"
          value={tarea.lote_id}
          onChange={handleChange}
          options={lotes.map((l) => ({ value: l.id, label: l.nombre }))}
          required
        />
        <Select
          label="Operario"
          name="operario_id"
          value={tarea.operario_id}
          onChange={handleChange}
          options={usuarios.map((u) => ({ value: u.id, label: u.nombre }))}
          required
        />
        <Select
          label="Estado"
          name="estado"
          value={tarea.estado}
          onChange={handleChange}
          options={estados}
          required
        />
        <Button type="submit">{id ? "Actualizar" : "Crear"}</Button>
      </form>
    </div>
  );
}
