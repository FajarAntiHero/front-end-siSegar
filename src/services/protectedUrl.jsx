import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = sessionStorage.getItem('accessToken'); // Cek apakah ada token

  if (!isAuthenticated) {
    // Jika tidak ada token, arahkan ke halaman login
    return <Navigate to="/masuk-akun" replace />;
  }

  return children; // Jika ada token, render komponen anak
}

export default ProtectedRoute;