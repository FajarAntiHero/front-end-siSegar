import { ButtonCustomSizeableComponent } from "../component/button";
import { useState } from "react";
import axiosInstance from "../services/processSignUp";
import { NavbarDashboard } from "../component/navbar";
import { InputComponent, MenuDashboard, TextAreaComponent  } from "../component/utils";

export default function CreateEventUser(){

    // State untuk menyimpan nilai input dari form
    const [nameEvent, setNameEvent] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [timeRegistration, setTimeRegistration] = useState('');
    const [timeEvent, setTimeEvent] = useState('');
    const [placeEvent, setPlaceEvent] = useState('');
    const [criteriaMember, setCriteriaMember] = useState('');
    const [facebookLink, setFacebookLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [eventCoordinator, setEventCoordinator] = useState('');
    const [contactAdmin, setContactAdmin] = useState('');
    const [proposal, setProposal] = useState('');
    const [message, setMessage] = useState('')

    // Fungsi yang akan dijalankan saat form disubmit
    const handleSubmit = async (event) => {
        event.preventDefault(); // Mencegah reload halaman
        setMessage(''); // Reset pesan status


        // Data yang akan dikirim ke backend
        const formData = {
            name_event: nameEvent,
            short_description: shortDescription,
            description: description,
            event_coordinator : eventCoordinator,
            time_registration : timeRegistration,
            time_event : timeEvent,
            place_event : placeEvent,
            social_media_instagram : instagramLink,
            social_media_facebook : facebookLink,
            social_media_twitter : twitterLink,
            contact_admin : contactAdmin,
            criteria_member : criteriaMember,
            proposal_event : proposal
        };

        console.log(formData)

        try {
            
            const response = await axiosInstance.post('/acara/acara-user/', formData);

            // Jika permintaan berhasil (status 2xx)
            console.log('Data berhasil dikirim:', response.data);
            setMessage('Data berhasil disimpan!');

            // Opsional: Reset form setelah sukses
            setTitle('');
            setDescription('');

        } catch (error) {
            // Jika ada kesalahan (misalnya status 4xx, 5xx, atau masalah jaringan)
            console.error('Gagal mengirim data:', error);

            // Mendapatkan pesan error dari backend
            let errorMessage = 'Terjadi kesalahan saat menyimpan data.';
            if (error.response) {
                // Server merespons dengan status error (misalnya 400, 401, 403, 404, 500)
                // Pesan error biasanya ada di error.response.data
                if (error.response.data && typeof error.response.data === 'object') {
                    // Jika backend mengirim JSON error (misalnya {"detail": "Authentication credentials were not provided."})
                    errorMessage = error.response.data.detail || JSON.stringify(error.response.data);
                } else if (typeof error.response.data === 'string') {
                    // Jika backend mengirim pesan teks biasa
                    errorMessage = error.response.data;
                }
                // Anda juga bisa mengakses error.response.status untuk kondisi spesifik
                if (error.response.status === 401) {
                    errorMessage += " Anda tidak terautentikasi atau sesi berakhir. Silakan login kembali.";
                    // Interceptor di axiosInstance.js seharusnya sudah menangani redirect
                }
            } else if (error.request) {
                // Permintaan dibuat tapi tidak ada respons (misalnya masalah jaringan)
                errorMessage = "Tidak ada respons dari server. Periksa koneksi internet Anda.";
            } else {
                // Kesalahan lain saat menyiapkan permintaan
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
                        <p className="font-montserrat text-2xl md:text-3xl font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">Buat Acara</p>
                    </div>
                    <div className="w-full md:w-[80%] md:mx-auto h-fit p-4">
                        <div className="w-full h-[20vh] px-4">
                            <MenuDashboard bgMenu={"bg-parsley-50"}  position={"top-[1.5rem"}/>
                        </div>
                        <div className="w-full h-fit rounded-2xl bg-parsley-50 p-3 pt-4">
                            <form onSubmit={handleSubmit} className="w-full h-fit">
                                <InputComponent 
                                    nameLabel={"Nama Acara"}
                                    idForm={"name_Event"}
                                    typeInput={"text"}
                                    placeholder={"Nama Acara Kamu"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={nameEvent}
                                    onChange={(e) => setNameEvent(e.target.value)}
                                />
                                <TextAreaComponent
                                    nameLabel={"Deskripsi Singkat Acara"}
                                    idForm={"short_description"}
                                    typeInput={"text"}
                                    placeholder={"Deskripsi Singkat"}
                                    marginForm={"mb-4"}
                                    bgInput={"bg-parsley-300"}
                                    isRequired={true}
                                    value={shortDescription}
                                    onChange={(e) => setShortDescription(e.target.value)}
                                />
                                <TextAreaComponent
                                    nameLabel={"Deskripsi Lengkap Acara"}
                                    idForm={"description"}
                                    typeInput={"text"}
                                    placeholder={"Deskripsi Lengkap"}
                                    marginForm={"mb-4"}
                                    bgInput={"bg-parsley-300"}
                                    isRequired={true}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Penyelenggara Acara"}
                                    idForm={"event_coordinator"}
                                    typeInput={"text"}
                                    placeholder={"Penyelenggara Acara"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={eventCoordinator}
                                    onChange={(e) => setEventCoordinator(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Waktu Pendaftaran"}
                                    idForm={"time_registration"}
                                    typeInput={"date"}
                                    placeholder={"Waktu Pendaftaran"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={timeRegistration}
                                    onChange={(e) => setTimeRegistration(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Waktu Acara"}
                                    idForm={"time_event"}
                                    typeInput={"date"}
                                    placeholder={"Waktu Acara"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={timeEvent}
                                    onChange={(e) => setTimeEvent(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Tempat Acara"}
                                    idForm={"place_event"}
                                    typeInput={"text"}
                                    placeholder={"Tempat Acara"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={placeEvent}
                                    onChange={(e) => setPlaceEvent(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Kriteria Peserta"}
                                    idForm={"criteria_member"}
                                    typeInput={"text"}
                                    placeholder={"Keterangan Peserta"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={criteriaMember}
                                    onChange={(e) => setCriteriaMember(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Sosial Media Instagram"}
                                    idForm={"social_media_instagram"}
                                    typeInput={"text"}
                                    placeholder={"Link Sosial Media"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={instagramLink}
                                    onChange={(e) => setInstagramLink(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Sosial Media Facebook"}
                                    idForm={"social_media_facebook"}
                                    typeInput={"text"}
                                    placeholder={"Link Sosial Media"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={facebookLink}
                                    onChange={(e) => setFacebookLink(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Sosial Media Twitter"}
                                    idForm={"social_media_twitter"}
                                    typeInput={"text"}
                                    placeholder={"Link Sosial Media"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                    value={twitterLink}
                                    onChange={(e) => setTwitterLink(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Kontak Admin"}
                                    idForm={"contact_admin_community"}
                                    typeInput={"text"}
                                    placeholder={"Email atau No. Telp"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={contactAdmin}
                                    onChange={(e) => setContactAdmin(e.target.value)}
                                />
                                <InputComponent 
                                    nameLabel={"Proposal Acara"}
                                    idForm={"proposal_event"}
                                    typeInput={"file"}
                                    placeholder={"Proposal Acara"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                    value={proposal}
                                    onChange={(e) => setProposal(e.target.value)}
                                />
                                <ButtonCustomSizeableComponent
                                    width={"w-full"}
                                    height={"h-fit"}
                                    textButton={"Buat Komunitas"}
                                    colorText={"text-parsley-50"}
                                    bgButton={"bg-parsley-600"}
                                    margin={""}
                                    padding={"py-2"}
                                    borderRadius={"rounded-2xl"}
                                    textSize={"text-[20px]"}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}