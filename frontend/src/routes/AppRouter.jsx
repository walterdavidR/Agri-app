// src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../modules/auth/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import UsuariosList from '../modules/usuarios/UsuariosList';
import UsuarioForm from '../modules/usuarios/UsuariosForm';
import TareasKanban from '../modules/tareas/TareasKanban';
import TareaForm from '../modules/tareas/TareaForm';
import LotesList from '../modules/lotes/LotesList';
import LoteForm from '../modules/lotes/LoteForm';
import SiembrasList from '../modules/siembras/SiembrasList';
import SiembraForm from '../modules/siembras/SiembraForm';
import CultivosList from '../modules/cultivos/CultivosList';
import CultivoForm from '../modules/cultivos/CultivoForm';
import InsumosList from '../modules/inventario/InsumosList';
import InsumoForm from '../modules/inventario/InsumoForm';
import MovimientosList from '../modules/inventario/MovimientosList';
import MovimientoForm from '../modules/inventario/MovimientoForm';
import IncidenciasList from '../modules/incidencias/IncidenciasList';
import IncidenciaForm from '../modules/incidencias/IncidenciaForm';
import ProveedoresList from '../modules/proveedores/ProveedoresList';
import ProveedorForm from '../modules/proveedores/ProveedorForm';
import ReportesPage from '../modules/reportes/ReportesPage';

import Layout from '../layout/Layout';
import PrivateRoute from '../auth/PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<Login />} />

        {/* Rutas privadas con Layout */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Usuarios */}
          <Route path="usuarios" element={<UsuariosList />} />
          <Route path="usuarios/nuevo" element={<UsuarioForm />} />
          <Route path="usuarios/:id" element={<UsuarioForm />} />

          {/* Tareas */}
          <Route path="tareas" element={<TareasKanban />} />
          <Route path="tareas/nuevo" element={<TareaForm />} />
          <Route path="tareas/:id" element={<TareaForm />} />

          {/* Lotes */}
          <Route path="lotes" element={<LotesList />} />
          <Route path="lotes/nuevo" element={<LoteForm />} />
          <Route path="lotes/:id" element={<LoteForm />} />

          {/* Siembras */}
          <Route path="siembras" element={<SiembrasList />} />
          <Route path="siembras/nuevo" element={<SiembraForm />} />
          <Route path="siembras/:id" element={<SiembraForm />} />

          {/* Cultivos */}
          <Route path="cultivos" element={<CultivosList />} />
          <Route path="cultivos/nuevo" element={<CultivoForm />} />
          <Route path="cultivos/:id" element={<CultivoForm />} />

          {/* Inventario */}
          <Route path="inventario/insumos" element={<InsumosList />} />
          <Route path="inventario/insumos/nuevo" element={<InsumoForm />} />
          <Route path="inventario/insumos/:id" element={<InsumoForm />} />

          <Route path="inventario/movimientos" element={<MovimientosList />} />
          <Route path="inventario/movimientos/nuevo" element={<MovimientoForm />} />
          <Route path="inventario/movimientos/:id" element={<MovimientoForm />} />

          {/* Incidencias */}
          <Route path="incidencias" element={<IncidenciasList />} />
          <Route path="incidencias/nuevo" element={<IncidenciaForm />} />
          <Route path="incidencias/:id" element={<IncidenciaForm />} />

          {/* Proveedores */}
          <Route path="proveedores" element={<ProveedoresList />} />
          <Route path="proveedores/nuevo" element={<ProveedorForm />} />
          <Route path="proveedores/:id" element={<ProveedorForm />} />

          {/* Reportes */}
          <Route path="reportes" element={<ReportesPage />} />
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
