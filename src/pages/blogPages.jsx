import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams untuk mendapatkan ID dari URL
import axios from 'axios';
import FooterContainer from "../component/footer"
import NavbarContainer from "../component/navbar"
import { AuthorDetail } from "../component/utils";
import jalan_1 from "../assets/images/Content Web SiSegar/jalan_1.jpg";

function Content(){
    const { id } = useParams(); // Mengambil 'id' dari parameter URL (misal: /events-public/123)
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
        try {
            // Panggil endpoint API publik untuk detail acara
            const response = await axios.get(`http://127.0.0.1:8000/api/blog/public/${id}/`);
            setBlog(response.data);
        } catch (err) {
            setError(err);
            console.error(`Error fetching event with ID ${id}:`, err);
        } finally {
            setLoading(false);
        }
        };

        fetchBlogDetail();
    }, [id]); // useEffect akan dijalankan ulang jika 'id' di URL berubah

  if (loading) return <div>Loading event details...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!event) return <div>Event not found.</div>;
    return (
        <>
            <div className="w-full h-fit bg-parsley-50">
                <div className="w-full md:w-[80%] lg:w-[70%] h-fit md:mx-auto p-4 pt-6">
                    <div className="w-full h-[20vh] md:h-[25vh] lg:h-[30vh] rounded-xl overflow-hidden mb-6">
                        <img src={jalan_1} alt="Gambar Blog" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full h-fit mb-6">
                        <p className="font-montserrat text-parsley-950 mb-4 md:mb-5 lg:mb-6 font-bold text-[20px] md:text-[24px] lg:[28px] text-center">{blog.title_blog}</p>
                        <p className="font-montserrat text-parsley-600 text-[16px] md:text-[18px] lg:[20px]">{blog.message_blog}</p>
                    </div>
                    <AuthorDetail author={blog.author_blog} timePublished={blog.publish_time_blog}/>
                </div>
            </div>
        </>
    )
}

function BlogPages(){
    return (
        <>
            <NavbarContainer/>
            <Content/>
            <FooterContainer/>
        </>
    )
}
export default BlogPages