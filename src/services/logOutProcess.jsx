import { useNavigate } from 'react-router-dom';
import axiosInstance from './processSignUp'; // Gunakan ini jika endpoint blacklist butuh token


export const useLogout = () => {
    const navigate = useNavigate();

    const logout = async () => {
        const currentRefreshToken = sessionStorage.getItem('refreshToken');

        // Hapus token dari sessionStorage di client-side
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');

        if (currentRefreshToken) {
            try {
                // PENTING: Untuk blacklist, umumnya tidak butuh access token di header
                // sehingga bisa pakai axios global, bukan axiosInstance yang terautentikasi.
                // KECUALI jika backend Anda memang mendesainnya harus terautentikasi.
                await axiosInstance.post(`/token/blacklist/`, { refresh: currentRefreshToken });
                console.log("Refresh token berhasil diblacklist di server.");
            } catch (error) {
                console.error("Gagal memblacklist refresh token di server:", error.response?.data || error.message);
                // Ini bisa terjadi jika refresh token sudah expired atau tidak valid di server.
                // Tidak perlu menghentikan proses logout client-side.
            }
        }

        // Arahkan pengguna ke halaman login
        navigate('/masuk-akun');
    };

    return logout; // Mengembalikan fungsi `logout`
};