import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../modules/auth/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import Layout from '../layout/Layout';
import PrivateRoute from '../auth/PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta pública: login */}
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas dentro del Layout */}
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

          {/* Acá puedes agregar más rutas protegidas */}
          {/* Ejemplo: <Route path="usuarios" element={<UsuariosList />} /> */}
        </Route>

        {/* Ruta no encontrada: redirigir a login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
