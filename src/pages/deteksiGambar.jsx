// deteksiGambar.jsx

import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import { LogoSiSegar, InputImage } from "../component/utils";
import { useState } from "react";

export default function DeteksiGambar() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadResult, setUploadResult] = useState("");
  const [detectionResult, setDetectionResult] = useState("");

  const handleUpload = () => {
  if (!file) {
    alert("Silakan pilih gambar terlebih dahulu.");
    return;
  }

  setUploadResult("Upload berhasil (simulasi).");
  setImagePreview(URL.createObjectURL(file));
  setDetectionResult(
    "Jenis sampah: Plastik.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  );
};

  return (
    <>
      <div className="bg-parsley-50">
        <NavbarContainer />
        <div className="flex flex-col justify-center items-center bg-parsley-50">
            <div className="flex flex-col justify-center items-center bg-parsley-300 rounded-xl w-[90%] h-[12vh] m-[5%]">
            <div className="flex flex-start">
                <LogoSiSegar />
                <h1 className="font-montserrat font-bold text-4xl ml-2">siSegar Pintar</h1>
            </div>
            <div className="bg-parsley-950 h-[0.4vh] w-[88%] m-[0.5vh] rounded-full"></div>
            <div>
                <p className="text-parsley-950 font-montserrat">
                Deteksi jenis sampah dengan siSegar-AI
                </p>
            </div>
            </div>
        </div>

        <InputImage onFileSelect={(f) => { setFile(f); setImagePreview(null); setDetectionResult(""); }} />

        <div className="flex justify-center mb-[4vh]">
            <button
            onClick={handleUpload}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold px-6 py-2 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
            ♻️ Deteksi Jenis Sampah
            </button>
        </div>

        {uploadResult && (
            <div
            className={`text-center mt-6 px-6 py-3 rounded-lg text-white font-montserrat shadow-md w-fit mx-auto transition-all duration-300 ${
                uploadResult.toLowerCase().includes("gagal") ||
                uploadResult.toLowerCase().includes("kesalahan")
                ? "bg-red-500"
                : "bg-green-600"
            }`}
            >
            {uploadResult}
            </div>
        )}

        {/* Preview & Result */}
        {imagePreview && (
        <div className="flex flex-col items-center mt-8 space-y-4 w-[90%] mx-auto bg-parsley-50 pb-10">
            <div className="w-full md:w-[60%] rounded-xl overflow-hidden shadow-lg border-2 border-parsley-300">
            <img src={imagePreview} alt="Preview" className="w-full h-auto object-contain" />
            </div>
            <div className="bg-parsley-50 rounded-xl p-6 shadow-md font-montserrat text-parsley-800 text-justify border border-parsley-200">
            {detectionResult}
            </div>
        </div>
        )}

        <FooterContainer/>
      </div>
    </>
  );
}
