import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllLotes } from "../../api/endpoints";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";

export default function LotesList() {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    fetchLotes();
  }, []);

  const fetchLotes = async () => {
    const data = await getAllLotes();
    setLotes(data);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Lotes Registrados</h2>
        <Link to="/lotes/nuevo">
          <Button>Registrar Lote</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lotes.map((lote) => (
          <Card key={lote.id}>
            <h3 className="text-lg font-semibold">{lote.nombre}</h3>
            <p>Área: {lote.area} m²</p>
            <p>Ubicación: {lote.ubicacion}</p>
            <p className="text-xs text-gray-500 mt-1">Creado por: {lote.creado_por}</p>
            <Link
              to={`/lotes/${lote.id}`}
              className="text-blue-600 text-sm mt-2 block"
            >
              Editar
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
