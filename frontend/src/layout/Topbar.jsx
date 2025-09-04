import React from 'react';
import { useAuth } from '../auth/AuthContext';

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700">AgriApp</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Bienvenido, {user?.name}</span>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Topbar;
