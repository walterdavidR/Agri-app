import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getLoteById,
  createLote,
  updateLote,
} from "../../api/endpoints";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export default function LoteForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lote, setLote] = useState({
    nombre: "",
    area: "",
    ubicacion: "",
    creado_por: "",
  });

  useEffect(() => {
    if (id) {
      getLoteById(id).then((data) => setLote(data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLote({ ...lote, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateLote(id, lote);
    } else {
      await createLote(lote);
    }
    navigate("/lotes");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Editar Lote" : "Nuevo Lote"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nombre del lote"
          name="nombre"
          value={lote.nombre}
          onChange={handleChange}
          required
        />
        <Input
          label="Área en metros cuadrados"
          name="area"
          value={lote.area}
          onChange={handleChange}
          required
        />
        <Input
          label="Ubicación geográfica"
          name="ubicacion"
          value={lote.ubicacion}
          onChange={handleChange}
          required
        />
        <Input
          label="Usuario responsable"
          name="creado_por"
          value={lote.creado_por}
          onChange={handleChange}
          required
        />
        <Button type="submit">{id ? "Actualizar" : "Registrar"}</Button>
      </form>
    </div>
  );
}
