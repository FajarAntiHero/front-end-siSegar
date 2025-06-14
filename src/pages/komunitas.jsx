import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import CardContainer from "../component/comunitycard";

export default function Komunitas(){
    return (
        <>
            <NavbarContainer/>
            <CardContainer
            thumbnailImage="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            comunityName="Komunitas SiSegar"
            comunityDesc="Ini deskripsi komunitas yang keren."
            tags={["Sayur", "Petani", "Organik"]}
            buttonText="Gabung"
            socialLinks={[
                { icon: "fa-youtube", url: "https://youtube.com" },
                { icon: "fa-twitter", url: "https://twitter.com" },
                { icon: "fa-linkedin", url: "https://linkedin.com" },
                { icon: "fa-facebook", url: "https://facebook.com" },
                { icon: "fa-instagram", url: "https://instagram.com" }
            ]}
            />
            <FooterContainer/>
        </>
    )
}