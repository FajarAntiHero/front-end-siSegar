import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Beranda from './pages/beranda'
import Tentang from './pages/tentang'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </BrowserRouter>
  )
}