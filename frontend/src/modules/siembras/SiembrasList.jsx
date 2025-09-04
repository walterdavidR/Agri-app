import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllSiembras } from "../../api/endpoints";
import { Button } from "../../components/common/Button";

export default function SiembrasList() {
  const [siembras, setSiembras] = useState([]);

  useEffect(() => {
    fetchSiembras();
  }, []);

  const fetchSiembras = async () => {
    try {
      const data = await getAllSiembras();
      setSiembras(data);
    } catch (error) {
      console.error("Error al obtener siembras", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Listado de Siembras</h2>
        <Link to="/siembras/nueva">
          <Button>Nueva Siembra</Button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="px-4 py-2">Lote</th>
              <th className="px-4 py-2">Cultivo</th>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {siembras.map((siembra) => (
              <tr key={siembra.id} className="border-t">
                <td className="px-4 py-2">{siembra.lote?.nombre || 'Sin Lote'}</td>
                <td className="px-4 py-2">{siembra.cultivo?.nombre || 'Sin Cultivo'}</td>
                <td className="px-4 py-2">{siembra.fecha_siembra}</td>
                <td className="px-4 py-2">
                  <Link to={`/siembras/editar/${siembra.id}`} className="text-blue-600 hover:underline mr-3">Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
