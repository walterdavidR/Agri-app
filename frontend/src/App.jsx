// src/App.jsx
import React from 'react';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './auth/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
