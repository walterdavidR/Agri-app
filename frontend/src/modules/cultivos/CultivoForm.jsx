import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCultivoById, createCultivo, updateCultivo } from "../../api/endpoints";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export default function CultivoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cultivo, setCultivo] = useState({
    nombre: "",
    descripcion: "",
  });

  useEffect(() => {
    if (id) {
      loadCultivo();
    }
  }, [id]);

  const loadCultivo = async () => {
    const data = await getCultivoById(id);
    setCultivo(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCultivo({ ...cultivo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateCultivo(id, cultivo);
    } else {
      await createCultivo(cultivo);
    }
    navigate("/cultivos");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Editar Cultivo" : "Registrar Cultivo"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nombre del Cultivo"
          name="nombre"
          value={cultivo.nombre}
          onChange={handleChange}
          required
        />
        <Input
          label="Descripción"
          name="descripcion"
          value={cultivo.descripcion}
          onChange={handleChange}
          required
        />
        <Button type="submit">
          {id ? "Actualizar Cultivo" : "Crear Cultivo"}
        </Button>
      </form>
    </div>
  );
}
