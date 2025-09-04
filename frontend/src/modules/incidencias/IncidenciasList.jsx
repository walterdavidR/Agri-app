// src/modules/incidencias/IncidenciasList.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllIncidencias } from "../../api/endpoints";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";

export default function IncidenciasList() {
  const [incidencias, setIncidencias] = useState([]);

  useEffect(() => {
    fetchIncidencias();
  }, []);

  const fetchIncidencias = async () => {
    const data = await getAllIncidencias();
    setIncidencias(data);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Lista de Incidencias</h2>
        <Link to="/incidencias/nueva">
          <Button>Registrar Incidencia</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {incidencias.map((item) => (
          <Card key={item.id}>
            <h3 className="font-semibold">{item.titulo}</h3>
            <p className="text-sm text-gray-600">{item.descripcion}</p>
            <p className="text-xs mt-1">Registrado por: {item.usuario}</p>
            <Link to={`/incidencias/${item.id}`} className="text-blue-600 text-sm mt-2 block">
              Editar
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
