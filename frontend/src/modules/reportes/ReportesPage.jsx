// src/modules/reportes/ReportesPage.jsx
import React from "react";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";

export default function ReportesPage() {
  const reportes = [
    { id: 1, nombre: "Producción por período", url: "/api/reportes/produccion" },
    { id: 2, nombre: "Tiempos por tarea y operario", url: "/api/reportes/tiempos" },
    { id: 3, nombre: "Consumo de insumos por orden", url: "/api/reportes/consumo" },
    { id: 4, nombre: "Desperdicio por lote (%)", url: "/api/reportes/desperdicio" },
    { id: 5, nombre: "Eficiencia consolidada", url: "/api/reportes/eficiencia" },
  ];

  const handleDescargar = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reportes del Sistema</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportes.map((reporte) => (
          <Card key={reporte.id}>
            <h3 className="text-lg font-semibold mb-2">{reporte.nombre}</h3>
            <Button onClick={() => handleDescargar(reporte.url)}>
              Descargar
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
