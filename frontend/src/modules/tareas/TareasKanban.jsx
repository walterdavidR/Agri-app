// src/modules/tareas/TareasKanban.jsx
import React, { useEffect, useState } from "react";
import { getAllTareas } from "../../api/endpoints";
import { Card } from "../../components/common/Card";

const estados = ["pendiente", "en_proceso", "finalizada"];

export default function TareasKanban() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    getAllTareas().then(setTareas);
  }, []);

  const tareasPorEstado = (estado) =>
    tareas.filter((tarea) => tarea.estado === estado);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tablero de Tareas (Kanban)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {estados.map((estado) => (
          <div key={estado}>
            <h3 className="text-lg font-semibold capitalize mb-2">{estado.replace("_", " ")}</h3>
            {tareasPorEstado(estado).map((t) => (
              <Card key={t.id}>
                <p><strong>{t.nombre}</strong></p>
                <p>Lote: {t.lote}</p>
                <p>Responsable: {t.operario}</p>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
