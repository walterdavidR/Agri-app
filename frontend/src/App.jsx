import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './auth/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
