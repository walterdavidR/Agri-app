import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menu = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Lotes', path: '/lotes' },
    { name: 'Cultivos', path: '/cultivos' },
    { name: 'Siembras', path: '/siembras' },
    { name: 'Tareas', path: '/tareas' },
    { name: 'Inventario', path: '/inventario' },
    { name: 'Incidencias', path: '/incidencias' },
    { name: 'Proveedores', path: '/proveedores' },
    { name: 'Usuarios', path: '/usuarios' },
    { name: 'Reportes', path: '/reportes' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-full px-4 py-6">
      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded hover:bg-green-100 ${
                isActive ? 'bg-green-200 font-semibold' : 'text-gray-700'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
