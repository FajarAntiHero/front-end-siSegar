import { ButtonCustomSizeableComponent } from "../component/button";
import { NavbarDashboard } from "../component/navbar";
import { InputComponent, MenuDashboard, TextAreaComponent  } from "../component/utils";

export default function CreateCommunityUser(){
    return (
        <>
            <div className="w-full h-fit p-4">
                <NavbarDashboard/>
                <div className="w-full h-fit bg-parsley-300 rounded-3xl">
                    <div className="w-full md:w-[80%] md:mx-auto h-[15vh] flex justify-center items-center">
                        <p className="font-montserrat text-2xl md:text-3xl font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">Buat Komunitas</p>
                    </div>
                    <div className="w-full md:w-[80%] md:mx-auto h-[calc(100vh_-_15vh_-_8vh_-_46px)] p-4">
                        <div className="w-full h-[20%] px-4">
                            <MenuDashboard bgMenu={"bg-parsley-50"}/>
                        </div>
                        <div className="w-full h-[80%] rounded-2xl bg-parsley-50 p-3 pt-4 overflow-y-scroll">
                            <form action="" className="w-full h-fit">
                                <InputComponent 
                                    nameLabel={"Nama Komunitas"}
                                    idForm={"name_community"}
                                    typeInput={"text"}
                                    placeholder={"Nama Komunitas Kamu"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                />
                                <TextAreaComponent
                                    nameLabel={"Nama Komunitas"}
                                    idForm={"name_community"}
                                    typeInput={"text"}
                                    placeholder={"Nama Komunitas Kamu"}
                                    marginForm={"mb-4"}
                                    bgInput={"bg-parsley-300"}
                                    isRequired={true}
                                />
                                <TextAreaComponent
                                    nameLabel={"Nama Komunitas"}
                                    idForm={"name_community"}
                                    typeInput={"text"}
                                    placeholder={"Nama Komunitas Kamu"}
                                    marginForm={"mb-4"}
                                    bgInput={"bg-parsley-300"}
                                    isRequired={true}
                                />
                                <InputComponent 
                                    nameLabel={"Komunitas Whatsapp"}
                                    idForm={"whatsapp_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Whatsapp"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Komunitas Facebook"}
                                    idForm={"facebook_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Facebook"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Komunitas Instagram"}
                                    idForm={"instagram_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Instagram"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Komunitas Twitter"}
                                    idForm={"twitter_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Twitter"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Komunitas Youtube"}
                                    idForm={"youtube_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Youtube"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Komunitas Discord"}
                                    idForm={"discord_link_community"}
                                    typeInput={"text"}
                                    placeholder={"Link Komunitas Discord"}
                                    marginForm={"mb-4"}
                                    isRequired={false}
                                />
                                <InputComponent 
                                    nameLabel={"Kriteria Anggota"}
                                    idForm={"criteria_member"}
                                    typeInput={"text"}
                                    placeholder={"Keterangan Kriteria"}
                                    marginForm={"mb-4"}
                                    isRequired={true}
                                />
                                <InputComponent 
                                    nameLabel={"Kontak Admin"}
                                    idForm={"contact_admin_community"}
                                    typeInput={"text"}
                                    placeholder={"Kontak Admin Komunitas"}
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