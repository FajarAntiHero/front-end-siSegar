import air_terjun from "../assets/images/Content Web SiSegar/air_terjun.jpg";
import kebon_3 from "../assets/images/Content Web SiSegar/kebon_3.jpg";
import { EventCard, BlogCard, CommunityCard } from "../component/blogCard";

function ShowResult({data, nameCard}){

    if (nameCard === "acara"){
        return (
            <>
                <div className="w-full h-fit md:flex md:flex-wrap md:justify-around ">
                    {data.map(acaraItem => (
                        <EventCard 
                            key={acaraItem.id}
                            thumbnailImage="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                            eventName={acaraItem.name_event}
                            eventDesc={acaraItem.short_description}
                            linkDetail={acaraItem.id}
                            socialLinks={[]}
                        />
                    ))}
                </div>
            </>
        )
    } else if (nameCard === "komunitas") {
        return (
            <>
                <div className="w-full h-fit md:flex md:flex-wrap md:justify-around ">
                    {data.map(komunitasItem => (
                        <CommunityCard 
                            key={komunitasItem.id}
                            thumbnailImage="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                            communityName={komunitasItem.name_community}
                            communityDesc={komunitasItem.short_description}
                            linkDetail={komunitasItem.id}
                            socialLinks={[]}
                        />
                    ))}
                </div>
            </>
        )
    } else if (nameCard === "blog") {

        return (
            <>
                <div className="w-full h-fit md:flex md:flex-wrap md:justify-around ">
                    {data.map((blogItem) => (
                        <BlogCard
                            key={blogItem.id}
                            thumbnailImage="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                            blogName={blogItem.title_blog}
                            blogDesc={blogItem.short_description_blog}
                            linkDetail={`/blog/${blogItem.id}`}
                        />
                    ))}
                </div>
            </>
        )
    }
    
}
function ShowError({message}){
    return (
        <>
            <div className="w-full lg:w-[60%] lg:mx-auto h-fit p-4 bg-parsley-50 rounded-2xl">
                <div className="w-full h-[20vh] rounded-xl overflow-hidden mb-4">
                    <img src={kebon_3} alt="" className='w-full h-full object-cover'/>
                </div>
                <p className='font-montserrat font-bold text-2xl text-guardsman-red-600 text-center'>{message}</p>
            </div>
        </>
    )
}
function ShowLoading(){
    return (
        <>
            <div className="w-full lg:w-[60%] lg:mx-auto h-fit p-4 bg-parsley-50 rounded-2xl">
                <div className="w-full h-[20vh] rounded-xl overflow-hidden mb-4">
                    <img src={air_terjun} alt="" className='w-full h-full object-cover'/>
                </div>
                <p className='font-montserrat font-bold text-2xl text-corn-600 text-center'>Sedang Meminta Data Ke Server</p>
            </div>
        </>
    )
}

export {ShowResult, ShowLoading, ShowError};