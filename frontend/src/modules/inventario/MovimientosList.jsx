// src/modules/inventario/MovimientosList.jsx
import { useEffect, useState } from "react";
import { getMovimientos } from "../../api/endpoints";

export default function MovimientosList() {
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    getMovimientos().then(setMovimientos);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Movimientos de Inventario</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Insumo</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          {movimientos.map((mov) => (
            <tr key={mov.id}>
              <td>{mov.insumo}</td>
              <td>{mov.tipo}</td>
              <td>{mov.cantidad}</td>
              <td>{mov.fecha}</td>
              <td>{mov.motivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
