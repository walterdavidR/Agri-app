import React from 'react';
import { useAuth } from '../../auth/AuthContext';
import Card from '../../components/common/Card';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Bienvenido, {user?.name}</h1>
      <p className="text-gray-600">Resumen general de operaciones agrícolas</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <Card title="Lotes Activos" value="12" />
        <Card title="Cultivos en Proceso" value="8" />
        <Card title="Tareas Pendientes" value="25" />
        <Card title="Stock Insumos" value="153" />
      </div>
    </div>
  );
};

export default Dashboard;
