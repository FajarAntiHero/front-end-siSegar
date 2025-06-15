// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Ganti dengan URL backend Anda (local/deployment)
  timeout: 10000, // Timeout request 5 detik
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk menambahkan token ke setiap request terotentikasi
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('accessToken'); // Ambil token dari local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Tambahkan header Authorization
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk menangani token expired 
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Jika error 401 dan bukan dari endpoint refresh token, dan belum dicoba ulang
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Tandai bahwa request ini sudah dicoba ulang
      const refreshToken = sessionStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          // Panggil endpoint refresh token
          const refreshResponse = await axiosInstance.post('/token/refresh/', { refresh: refreshToken });
          const newAccessToken = refreshResponse.data.access;

          sessionStorage.setItem('accessToken', newAccessToken); // Simpan token baru
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`; // Update header default axios
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`; // Update header request asli

          return axiosInstance(originalRequest); // Coba ulang request asli
        } catch (refreshError) {
          console.error("Refresh token failed:", refreshError);
          // Jika refresh gagal, hapus semua token dan redirect ke login
          sessionStorage.removeItem('accessToken');
          sessionStorage.removeItem('refreshToken');
          window.location.href = '/masuk-akun'; // Redirect ke halaman login
          return Promise.reject(refreshError);
        }
      } else {
        // Jika tidak ada refresh token, langsung redirect ke login
        sessionStorage.removeItem('accessToken');
        window.location.href = '/masuk-akun';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;