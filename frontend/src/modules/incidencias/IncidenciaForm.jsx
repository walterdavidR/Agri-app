// src/modules/incidencias/IncidenciaForm.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getIncidenciaById, createIncidencia, updateIncidencia } from "../../api/endpoints";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export default function IncidenciaForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [incidencia, setIncidencia] = useState({
    titulo: "",
    descripcion: "",
    usuario: ""
  });

  useEffect(() => {
    if (id) {
      getIncidenciaById(id).then(data => setIncidencia(data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncidencia({ ...incidencia, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateIncidencia(id, incidencia);
    } else {
      await createIncidencia(incidencia);
    }
    navigate("/incidencias");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{id ? "Editar Incidencia" : "Nueva Incidencia"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Título"
          name="titulo"
          value={incidencia.titulo}
          onChange={handleChange}
          required
        />
        <Input
          label="Descripción"
          name="descripcion"
          value={incidencia.descripcion}
          onChange={handleChange}
          required
        />
        <Input
          label="Usuario que reporta"
          name="usuario"
          value={incidencia.usuario}
          onChange={handleChange}
          required
        />
        <Button type="submit">
          {id ? "Actualizar" : "Registrar"}
        </Button>
      </form>
    </div>
  );
}
