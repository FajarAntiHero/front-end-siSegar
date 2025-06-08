import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Beranda from './pages/beranda'
import TentangSiSegar from './pages/tentangSiSegar'
import SiSegarDeveloper from './pages/tentangSiSegarDeveloper'
import Komunitas from './pages/komunitas'
import Acara from './pages/acara'
import Kontak from './pages/kontak'
import DeteksiGambar from './pages/deteksiGambar'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang">
          <Route path="sisegar" element={<TentangSiSegar/>}/>
          <Route path="sisegar-developer" element={<SiSegarDeveloper/>}/>
        </Route>
        <Route path="/blog"/>
        <Route path="/layanan">
          <Route path="komunitas" element={<Komunitas/>}/>
          <Route path="acara" element={<Acara/>}/>
          <Route path="kontak" element={<Kontak/>}/>
          <Route path="deteksi-gambar" element={<DeteksiGambar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    // <Beranda/>

  )
}