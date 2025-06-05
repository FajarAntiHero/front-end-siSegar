export default function FooterContainer() {
    return (
    <footer className="bg-emerald-100 text-center text-gray-700">
      {/* Bagian atas */}
      <div className="px-4 py-6 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-2">
          <img src="/logo.png" alt="siSegar" className="w-12 h-12" />
        </div>

        {/* Nama & Deskripsi */}
        <h2 className="font-bold text-lg">siSegar</h2>
        <p className="max-w-md text-sm mt-2">
          siSegar adalah sebuah platform digital yang dirancang untuk mendorong terciptanya lingkungan hidup yang sehat, hijau dan berkelanjutan.
        </p>

        {/* Sosial Media */}
        <div className="flex gap-4 mt-4">
          {/* Ganti src dengan ikon yang kamu punya */}
          <img src="/icon-whatsapp.svg" alt="WA" className="w-6 h-6" />
          <img src="/icon-twitter.svg" alt="Twitter" className="w-6 h-6" />
          <img src="/icon-linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          <img src="/icon-facebook.svg" alt="FB" className="w-6 h-6" />
          <img src="/icon-instagram.svg" alt="IG" className="w-6 h-6" />
        </div>
      </div>

      {/* Garis & bagian bawah */}
      <div className="bg-emerald-300 text-sm py-3 px-4 flex justify-between items-center">
        <span>All Rights Reserved</span>
        <span>Privacy Policy</span>
        <span>@CopyRights siSegar 2025</span>
      </div>
    </footer>
  );
}
