// src/modules/inventario/InsumoForm.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInsumoById, createInsumo, updateInsumo } from "../../api/endpoints";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export default function InsumoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [insumo, setInsumo] = useState({
    nombre: "",
    unidad: "",
    stock: 0,
  });

  useEffect(() => {
    if (id) {
      getInsumoById(id).then(setInsumo);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsumo({ ...insumo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateInsumo(id, insumo);
    } else {
      await createInsumo(insumo);
    }
    navigate("/inventario/insumos");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
      <h2 className="text-xl font-bold">{id ? "Editar" : "Nuevo"} Insumo</h2>
      <Input label="Nombre" name="nombre" value={insumo.nombre} onChange={handleChange} required />
      <Input label="Unidad de medida" name="unidad" value={insumo.unidad} onChange={handleChange} required />
      <Input label="Stock inicial" name="stock" value={insumo.stock} type="number" onChange={handleChange} required />
      <Button type="submit">{id ? "Actualizar" : "Guardar"}</Button>
    </form>
  );
}
