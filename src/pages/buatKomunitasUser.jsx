import { useState } from "react";
import axiosInstance from "../services/processSignUp"; // <-- Pastikan path ini benar!
import { ButtonCustomSizeableComponent } from "../component/button";
import { NavbarDashboard } from "../component/navbar";
import { InputComponent, MenuDashboard, TextAreaComponent } from "../component/utils";

export default function CreateCommunityUser(){

    const [nameCommunity, setNameCommunity] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [whatsappLink, setWhatsappLink] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
    const [facebookLink, setFacebookLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [discordLink, setDiscordLink] = useState(''); // <-- Perhatikan: nama state sudah benar
    const [contactAdmin, setContactAdmin] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault(); // Mencegah reload halaman
        setMessage(''); // Reset pesan status

        // // Validasi sederhana (opsional tapi disarankan)
        // if (!nameCommunity.trim() || !description.trim()) {
        //     setMessage('Judul dan deskripsi tidak boleh kosong!');
        //     return;
        // }

        // Data yang akan dikirim ke backend
        const formData = {
            name_community : nameCommunity,
            short_description : shortDescription,
            description : description,
            whatsapp_link_community : whatsappLink,
            facebook_link_community : facebookLink,
            instagram_link_community : instagramLink,
            twitter_link_community : twitterLink,
            youtube_link_community : youtubeLink,
            discord_link_community : discordLink,
            contact_admin_community : contactAdmin,
        };
        console.log("Data yang akan dikirim:", formData);
        try {
            // KIRIM DATA MENGGUNAKAN axiosInstance.post()
            const response = await axiosInstance.post('/komunitas/komunitas-user/', formData);

            

            // Jika permintaan berhasil (status 2xx)
            console.log('Data berhasil dikirim:', response.data);
            setMessage('Data berhasil disimpan!');

            // Opsional: Reset form setelah sukses
            setNameCommunity(''); // <-- UBAH INI: sebelumnya setTitle, sekarang setNameCommunity
            setShortDescription(''); // Tambahkan reset untuk shortDescription
            setDescription(''); // Ini sudah ada
            setWhatsappLink('');
            setYoutubeLink('');
            setFacebookLink('');
            setInstagramLink('');
            setTwitterLink('');
            setDiscordLink('');
            setContactAdmin('');


        } catch (error) {
            // ... (logika penanganan error sudah cukup baik)
            console.error('Gagal mengirim data:', error);

            let errorMessage = 'Terjadi kesalahan saat menyimpan data.';
            if (error.response) {
                if (error.response.data && typeof error.response.data === 'object') {
                    errorMessage = error.response.data.detail || JSON.stringify(error.response.data);
                    // Cek jika ada error spesifik per field dari Django
                    if (error.response.data.name_community) {
                        errorMessage = `Nama Komunitas: ${error.response.data.name_community.join(', ')}`;
                    } else if (error.response.data.description) {
                        errorMessage = `Deskripsi: ${error.response.data.description.join(', ')}`;
                    }
                    // Tambahkan pengecekan untuk field lain jika diperlukan
                } else if (typeof error.response.data === 'string') {
                    errorMessage = error.response.data;
                }
                if (error.response.status === 401) {
                    errorMessage += " Anda tidak terautentikasi atau sesi berakhir. Silakan login kembali.";
                }
            } else if (error.request) {
                errorMessage = "Tidak ada respons dari server. Periksa koneksi internet Anda.";
            } else {
                errorMessage = "Error: " + error.message;
            }
            setMessage(`Gagal: ${errorMessage}`);
        }
    };

    return (
        <>
            <div className="w-full h-fit p-4">
                <NavbarDashboard/>
                <div className="w-full h-fit bg-parsley-300 rounded-3xl">
                    <div className="w-full md:w-[80%] md:mx-auto h-[15vh] flex justify-center items-center">
                        <p className="font-montserrat text-2xl md:text-3xl font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">Buat Komunitas</p>
                    </div>
                    <div className="w-full md:w-[80%] md:mx-auto h-fit p-4">
                        <div className="w-full h-[20vh] px-4">
                            <MenuDashboard bgMenu={"bg-parsley-50"} position={"top-[1.5rem]"}/> {/* <-- PERBAIKAN DI SINI */}
                        </div>
                        <div className="w-full h-fit rounded-2xl bg-parsley-50 p-3 pt-4">
                            <form onSubmit={handleSubmit} className="w-full h-fit">
                                <InputComponent
                                    nameLabel={"Nama Komunitas"}
                                    idForm={"name_community"}
                                    typeInput={"text"}
                                    placeholder={"Nama Komunitas Kamu"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={nameCommunity}
                                    onChange={(e) => setNameCommunity(e.target.value)}
                                />
                                <TextAreaComponent
                                    nameLabel={"Deskripsi Singkat"}
                                    idForm={"short_description"}
                                    typeInput={"text"} // Mungkin lebih baik type="textarea" di komponen InputComponent/TextAreaComponent itu sendiri
                                    placeholder={"Kalimat Deskripsi Singkat"}
                                    marginForm={"mb-4"}
                                    bgInput={"bg-parsley-300"}
                                    isRequired={true}
                                    value={shortDescription}
                                    onChange={(e) => setShortDescription(e.target.value)}
                                />
                                <TextAreaComponent
                                    nameLabel={"Deskripsi Lengkap"}
                                    idForm={"description"}
                                    typeInput={"text"} // Mungkin lebih baik type="textarea"
                                    placeholder={"Kalimat Deskripsi Lengkap"}
                                    marginForm={"mb-4"}
                                    bgInput={"bg-parsley-300"}
                                    isRequired={true}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <InputComponent
                                    nameLabel={"Komunitas Whatsapp"}
                                    idForm={"whatsapp_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Whatsapp"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={whatsappLink}
                                    onChange={(e) => setWhatsappLink(e.target.value)}
                                />
                                <InputComponent
                                    nameLabel={"Komunitas Facebook"}
                                    idForm={"facebook_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Facebook"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={facebookLink}
                                    onChange={(e) => setFacebookLink(e.target.value)}
                                />
                                <InputComponent
                                    nameLabel={"Komunitas Instagram"}
                                    idForm={"instagram_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Instagram"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={instagramLink}
                                    onChange={(e) => setInstagramLink(e.target.value)}
                                />
                                <InputComponent
                                    nameLabel={"Komunitas Twitter"}
                                    idForm={"twitter_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Twitter"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={twitterLink}
                                    onChange={(e) => setTwitterLink(e.target.value)}
                                />
                                <InputComponent
                                    nameLabel={"Komunitas Youtube"}
                                    idForm={"youtube_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Youtube"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={youtubeLink}
                                    onChange={(e) => setYoutubeLink(e.target.value)}
                                />
                                <InputComponent
                                    nameLabel={"Komunitas Discord"}
                                    idForm={"discord_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Discord"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={discordLink}
                                    onChange={(e) => setDiscordLink(e.target.value)}
                                />
                                <InputComponent
                                    nameLabel={"Kontak Admin"}
                                    idForm={"contact_admin_community"}
                                    typeInput={"text"}
                                    placeholder={"Kontak Admin Komunitas"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={contactAdmin}
                                    onChange={(e) => setContactAdmin(e.target.value)}
                                />
                                <ButtonCustomSizeableComponent
                                    width={"w-full"}
                                    height={"h-fit"}
                                    textButton={"Buat Komunitas"}
                                    colorText={"text-parsley-50"}
                                    bgButton={"bg-parsley-600"}
                                    margin={""}
                                    padding={"p-4"}
                                    borderRadius={"rounded-2xl"}
                                    textSize={"text-[20px]"}
                                />
                                {message && ( // Tampilkan pesan status jika ada
                                    <p className={`mt-4 text-center font-bold ${message.includes('Gagal') ? 'text-red-500' : 'text-green-600'}`}>
                                        {message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}