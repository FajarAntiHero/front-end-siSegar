import { Link, useNavigate } from "react-router-dom"; // Pastikan ini 'react-router-dom' bukan hanya 'react-router'
import { useState } from "react";
import { InputComponent, LogoSiSegar } from "../component/utils";
import { ButtonComponent } from "../component/button";
import laut_3 from "../assets/images/Content Web SiSegar/laut_3.jpg";
import axiosInstance from "../services/processSignUp";

export default function SignUpUser(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password2Error, setPassword2Error] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;

        // Reset semua error
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setPassword2Error('');
        setError(''); // Error umum

        // Validasi Username
        if (!username.trim()) {
            setUsernameError('Nama pengguna tidak boleh kosong.');
            isValid = false;
        } else if (username.length < 4) { // Contoh aturan: min 4 karakter
            setUsernameError('Nama pengguna minimal 4 karakter.');
            isValid = false;
        }

        // Validasi Email
        // Regex sederhana untuk email, bisa disempurnakan
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setEmailError('Email tidak boleh kosong.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Format email tidak valid.');
            isValid = false;
        }

        // Validasi Password
        if (!password.trim()) {
            setPasswordError('Kata sandi tidak boleh kosong.');
            isValid = false;
        } else if (password.length < 8) { // Contoh aturan: minimal 8 karakter
            setPasswordError('Kata sandi minimal 8 karakter.');
            isValid = false;
        } else if (!/[0-9]/.test(password)) { // Contoh aturan: harus ada angka
            setPasswordError('Kata sandi harus mengandung angka dan simbol.');
            isValid = false;
        }
        // Tambahkan validasi lain sesuai aturan backend Anda (simbol, dll.)

        // Validasi Konfirmasi Password
        if (!password2.trim()) {
            setPassword2Error('Konfirmasi kata sandi tidak boleh kosong.');
            isValid = false;
        } else if (password !== password2) {
            setPassword2Error('Konfirmasi kata sandi tidak cocok.');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Hentikan proses jika validasi frontend gagal
        }

        setError('');
        setSuccess('');

        // const registrationData = {
        //     username,
        //     email,
        //     password,
        //     password2, // Pastikan Anda punya state ini
        // };

        // // --- Tambahkan console.log() di sini ---
        // console.log("Data yang akan dikirim ke backend:", registrationData);
        // // ------------------------------------
        try {
        // Endpoint register backend Anda
            const response = await axiosInstance.post('/register/', {
                username,
                email,
                password,
                password2,
            });

            setSuccess('Registrasi berhasil! Silakan login.');
            setTimeout(() => {
                navigate('/masuk-akun'); // Arahkan ke halaman login
            }, 1500);
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Registrasi gagal.');
            } else {
                setError('Terjadi kesalahan jaringan atau server.');
            }
        }
    };

    return (
        <>
        
            <div className="w-full min-h-screen overflow-y-auto px-6 py-4 md:py-8 bg-parsley-200 flex justify-center items-center">
                <div className="w-full md:w-[75%] lg:w-[40%] md:mx-auto h-fit">
                    <div className="w-full h-fit rounded-3xl bg-parsley-50 mb-3 p-4 md:p-6">
                        <Link to={"/"} className="cursor-pointer">
                            <div className="w-full h-[5vh] flex justify-center items-center mb-4">
                                <LogoSiSegar/>
                                <p className="font-montserrat font-bold text-2xl text-parsley-950">siSegar</p>
                            </div>
                        </Link>
                        <div className="w-full h-[15vh] mb-4 rounded-[20px] overflow-hidden bg-gray-600">
                            <img src={laut_3} alt="Laut" className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-full h-fit">
                            <p className="font-montserrat font-bold text-parsley-600 text-center text-[16px] mb-4 lg:mb-2">Buat Akun</p>
                            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                            {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
                            <div className="w-full h-fit">
                                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                                    <InputComponent nameLabel={"Nama Pengguna"} idForm={"username"} typeInput={"text"} placeholder={"Nama Pengguna Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true} value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    {usernameError && <p className="text-red-500 text-xs italic mt-1">{usernameError}</p>}
                                    <InputComponent nameLabel={"Email Pengguna"} idForm={"email"} typeInput={"text"} placeholder={"Email Pengguna Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true} value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    {emailError && <p className="text-red-500 text-xs italic mt-1">{emailError}</p>}
                                    <InputComponent nameLabel={"Kata Sandi"} idForm={"password"} typeInput={"password"} placeholder={"Kata Sandi Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true} value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    {passwordError && <p className="text-red-500 text-xs italic mt-1">{passwordError}</p>}
                                    <InputComponent nameLabel={"Konfirmasi Kata Sandi"} idForm={"password2"} typeInput={"password"} placeholder={"Kata Sandi Akun"} marginForm={"mb-6"} bgInput={"bg-parsley-200"} isRequired={true} value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                                    {password2Error && <p className="text-red-500 text-xs italic mt-1">{password2Error}</p>}
                                    <ButtonComponent
                                        textButton={"Buat Akun"}
                                        colorText={"text-parsley-50"}
                                        margin={"mb-3 md:mb-4"}
                                        bgButton={"bg-parsley-800"}
                                        borderRadius={"rounded-[16px] md:rounded-[18px] lg:rounded-[20px]"}
                                        padding={"py-2 px-4 lg:px-6"}
                                        textSize={"text-[12px] md:text-[14px] lg:text-[16px]"}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <p className="font-montserrat text-[16px] text-parsley-600 text-center">Sudah Punya Akun? <Link to={"/masuk-akun"} className="font-bold">Masuk</Link></p>
                </div>
            </div>
        </>
    )
}