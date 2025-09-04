import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCultivos } from "../../api/endpoints";
import { Button } from "../../components/common/Button";

export default function CultivosList() {
  const [cultivos, setCultivos] = useState([]);

  useEffect(() => {
    fetchCultivos();
  }, []);

  const fetchCultivos = async () => {
    try {
      const data = await getAllCultivos();
      setCultivos(data);
    } catch (error) {
      console.error("Error al cargar cultivos", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Listado de Cultivos</h2>
        <Link to="/cultivos/nuevo">
          <Button>Nuevo Cultivo</Button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cultivos.map((cultivo) => (
              <tr key={cultivo.id} className="border-t">
                <td className="px-4 py-2">{cultivo.nombre}</td>
                <td className="px-4 py-2">{cultivo.descripcion}</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/cultivos/editar/${cultivo.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
