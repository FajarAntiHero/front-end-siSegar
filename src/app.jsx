import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import Beranda from './pages/beranda'
import TentangSiSegar from './pages/tentangSiSegar'
import SiSegarDeveloper from './pages/tentangSiSegarDeveloper'
import Komunitas from './pages/komunitas'
import Acara from './pages/acara'
import Kontak from './pages/kontak'
import DeteksiGambar from './pages/deteksiGambar'
import SignUpUser from './pages/signUpUser'
import LogInUser from './pages/logInUser'
import MainDashboard from './pages/dashboardUser'
import ShowCommunityUser from './pages/lihatKomunitasUser'
import CreateCommunityUser from './pages/buatKomunitasUser'
import ShowEventUser from './pages/lihatAcaraUser'
import CreateEventUser from './pages/buatAcaraUser'
import SettingUser from './pages/pengaturanUser'
import Blog from './pages/blog';
import ProtectedRoute from './services/protectedUrl';

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  useEffect(() => {
      ScrollTrigger.refresh();
  }, []);

  return (
    <BrowserRouter>    
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang">
            <Route path="sisegar" element={<TentangSiSegar/>}/>
            <Route path="sisegar-developer" element={<SiSegarDeveloper/>}/>
          </Route>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/layanan">
            <Route path="komunitas" element={<Komunitas/>}/>
            <Route path="acara" element={<Acara/>}/>
            <Route path="kontak" element={<Kontak/>}/>
            <Route path="deteksi-gambar" element={<DeteksiGambar/>}/>
          </Route>
          <Route path='/daftar-akun' element={<SignUpUser/>}/>
          <Route path='/masuk-akun' element={<LogInUser/>}/>
          <Route path='/user'>
            <Route path='dashboard' element={
              <ProtectedRoute>
                <MainDashboard/>
              </ProtectedRoute>
            }/>
            <Route path='lihat-komunitas' element={<ShowCommunityUser/>}/>
            <Route path='buat-komunitas' element={<CreateCommunityUser/>}/>
            <Route path='lihat-acara' element={<ShowEventUser/>}/>
            <Route path='buat-acara' element={<CreateEventUser/>}/>
            <Route path='pengaturan' element={<SettingUser/>}/>
          </Route>
        </Routes>
    </BrowserRouter>

    // <Beranda/>

  )
}