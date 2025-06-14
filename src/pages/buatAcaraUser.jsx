import { ButtonCustomSizeableComponent } from "../component/button";
import { NavbarDashboard } from "../component/navbar";
import { InputComponent, MenuDashboard, TextAreaComponent  } from "../component/utils";

export default function CreateEventUser(){
    return (
        <>
            <div className="w-full h-fit p-4">
                <NavbarDashboard/>
                <div className="w-full h-fit bg-parsley-300 rounded-3xl">
                    <div className="w-full h-[15vh] flex justify-center items-center">
                        <p className="font-montserrat text-3xl font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">Buat Acara</p>
                    </div>
                    <div className="w-full h-[calc(100vh_-_15vh_-_8vh_-_46px)] p-4">
                        <div className="w-full h-[20%] px-4">
                            <MenuDashboard bgMenu={"bg-parsley-50"}/>
                        </div>
                        <div className="w-full h-[80%] rounded-2xl bg-parsley-50 p-3 pt-4 overflow-scroll">
                            <form action="" className="w-full h-fit">
                                <InputComponent 
                                    nameLabel={"Nama Acara"}
                                    idForm={"name_Event"}
                                    typeInput={"text"}
                                    placeholder={"Nama Komunitas Kamu"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                />
                                <TextAreaComponent
                                    nameLabel={"Deskripsi Singkat Acara"}
                                    idForm={"short_description"}
                                    typeInput={"text"}
                                    placeholder={"Deskripsi Singkat"}
                                    marginForm={"mb-4"}
                                    bgInput={"bg-parsley-300"}
                                    isRequired={true}
                                />
                                <TextAreaComponent
                                    nameLabel={"Deskripsi Lengkap Acara"}
                                    idForm={"description"}
                                    typeInput={"text"}
                                    placeholder={"Deskripsi Lengkap"}
                                    marginForm={"mb-4"}
                                    bgInput={"bg-parsley-300"}
                                    isRequired={true}
                                />
                                <InputComponent 
                                    nameLabel={"Penyelenggara Acara"}
                                    idForm={"event_coordinator"}
                                    typeInput={"text"}
                                    placeholder={"Penyelenggara Acara"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Waktu Pendaftaran"}
                                    idForm={"time_registration"}
                                    typeInput={"text"}
                                    placeholder={"Waktu Pendaftaran"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Waktu Acara"}
                                    idForm={"time_event"}
                                    typeInput={"text"}
                                    placeholder={"Waktu Acara"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Tempat Acara"}
                                    idForm={"place_event"}
                                    typeInput={"text"}
                                    placeholder={"Tempat Acara"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Sosial Media Instagram"}
                                    idForm={"social_media_instagram"}
                                    typeInput={"text"}
                                    placeholder={"Link Sosial Media"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Sosial Media Facebook"}
                                    idForm={"social_media_facebook"}
                                    typeInput={"text"}
                                    placeholder={"Link Sosial Media"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Sosial Media Twitter"}
                                    idForm={"social_media_twitter"}
                                    typeInput={"text"}
                                    placeholder={"Link Sosial Media"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                />
                                <InputComponent 
                                    nameLabel={"Kontak Admin"}
                                    idForm={"contact_admin_community"}
                                    typeInput={"text"}
                                    placeholder={"Kontak Admin"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                />
                                <InputComponent 
                                    nameLabel={"Proposal Acara"}
                                    idForm={"proposal_event"}
                                    typeInput={"file"}
                                    placeholder={"Proposal Acara"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}