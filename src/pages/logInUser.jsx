import { Link , useNavigate} from "react-router";
import { useState } from "react";
import { InputComponent, LogoSiSegar } from "../component/utils";
import { ButtonComponent } from "../component/button";
import daun_tanaman from "../assets/images/Content Web SiSegar/daun_tanaman.jpg";
import axiosInstance from "../services/processSignUp";

export default function LogInUser(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            // Endpoint login backend Anda (misal /token/ untuk DRF Simple JWT)
            const response = await axiosInstance.post('/token/', { 
                username,
                password,
            });

            // Backend akan mengembalikan access dan refresh token
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;

            // Simpan token di localStorage (atau sessionStorage)
            // localStorage akan menyimpan token bahkan setelah browser ditutup
            // sessionStorage akan menghapus token saat tab/browser ditutup
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('refreshToken', refreshToken);

            // Set header default untuk axiosInstance agar setiap request selanjutnya otomatis menyertakan token
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

            navigate('/user/dashboard'); // Arahkan ke halaman dashboard admin
        } catch (err) {
            if (err.response && err.response.data) {
                // Sesuaikan pesan error dengan respons dari backend Anda
                setError(err.response.data.detail || 'Login gagal. Periksa username dan password Anda.');
            } else {
                setError('Terjadi kesalahan jaringan atau server.');
            }
        }
    };

    return (
        <>
            <div className="w-full h-[100vh] px-6 bg-parsley-200 flex justify-center items-center">
                <div className="w-full md:w-[80%] lg:w-[40%] md:mx-auto h-fit">
                    <div className="w-full h-fit rounded-3xl bg-parsley-50 mb-3 p-4 md:p-6">
                        <Link to={"/"} className="cursor-pointer">
                            <div className="w-full h-[5vh] flex justify-center items-center mb-4">
                                <LogoSiSegar/>
                                <p className="font-montserrat font-bold text-2xl text-parsley-950">siSegar</p>
                            </div>
                        </Link>
                        <div className="w-full h-[15vh] mb-4 rounded-[20px] overflow-hidden bg-gray-600">
                            <img src={daun_tanaman} alt="Daun Tanaman" className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-full h-fit">
                            <p className="font-montserrat font-bold text-parsley-600 text-center text-[16px] mb-4 lg:mb-2">Masuk</p>
                            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                            <div className="w-full h-fit">
                                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                                    <InputComponent nameLabel={"Nama Pengguna"} idForm={"username"} typeInput={"text"} placeholder={"Nama Pengguna Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true} value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    <InputComponent nameLabel={"Kata Sandi"} idForm={"password"} typeInput={"password"} placeholder={"Kata Sandi Akun"} marginForm={"mb-6"} bgInput={"bg-parsley-200"} isRequired={true} value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <ButtonComponent 
                                        textButton={"Masuk Akun"} 
                                        colorText={"text-parsley-50"} 
                                        margin={"mb-6 lg:mb-4"} 
                                        bgButton={"bg-parsley-800"} 
                                        borderRadius={"rounded-[20px]"}
                                        padding={"py-4 px-6 lg:py-2"}
                                        textSize={"text-[16px]"}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <p className="font-montserrat text-[16px] text-parsley-600 text-center">Belum Punya Akun? <Link to={"/daftar-akun"} className="font-bold">Daftar Akun</Link></p>
                </div>
            </div>
        </>
    )
}