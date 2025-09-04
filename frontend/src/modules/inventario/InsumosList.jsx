// src/modules/inventario/InsumosList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getInsumos, deleteInsumo } from "../../api/endpoints";
import { Button } from "../../components/common/Button";

export default function InsumosList() {
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    fetchInsumos();
  }, []);

  const fetchInsumos = async () => {
    const data = await getInsumos();
    setInsumos(data);
  };

  const handleDelete = async (id) => {
    if (confirm("¿Desea eliminar este insumo?")) {
      await deleteInsumo(id);
      fetchInsumos();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Listado de Insumos</h2>
      <Link to="/inventario/insumos/nuevo">
        <Button>Agregar Insumo</Button>
      </Link>
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-100">
            <th>Nombre</th>
            <th>Unidad</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {insumos.map((insumo) => (
            <tr key={insumo.id}>
              <td>{insumo.nombre}</td>
              <td>{insumo.unidad}</td>
              <td>{insumo.stock}</td>
              <td>
                <Link to={`/inventario/insumos/${insumo.id}`}>
                  <Button>Editar</Button>
                </Link>
                <Button onClick={() => handleDelete(insumo.id)} variant="danger">
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
