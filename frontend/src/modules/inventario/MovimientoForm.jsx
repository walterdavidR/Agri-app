// src/modules/inventario/MovimientoForm.jsx
import { useState, useEffect } from "react";
import { getInsumos, createMovimiento } from "../../api/endpoints";
import { Input } from "../../components/common/Input";
import { Select } from "../../components/common/Select";
import { Button } from "../../components/common/Button";

export default function MovimientoForm() {
  const [movimiento, setMovimiento] = useState({
    insumo_id: "",
    tipo: "entrada",
    cantidad: 0,
    motivo: "",
  });

  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    getInsumos().then(setInsumos);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovimiento({ ...movimiento, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMovimiento(movimiento);
    alert("Movimiento registrado");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <h2 className="text-xl font-bold">Registrar Movimiento</h2>
      <Select
        label="Insumo"
        name="insumo_id"
        value={movimiento.insumo_id}
        onChange={handleChange}
        options={insumos.map(i => ({ value: i.id, label: i.nombre }))}
        required
      />
      <Select
        label="Tipo"
        name="tipo"
        value={movimiento.tipo}
        onChange={handleChange}
        options={[
          { value: "entrada", label: "Entrada" },
          { value: "salida", label: "Salida" }
        ]}
        required
      />
      <Input
        label="Cantidad"
        name="cantidad"
        type="number"
        value={movimiento.cantidad}
        onChange={handleChange}
        required
      />
      <Input
        label="Motivo"
        name="motivo"
        value={movimiento.motivo}
        onChange={handleChange}
      />
      <Button type="submit">Registrar</Button>
    </form>
  );
}
