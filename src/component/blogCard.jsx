import { Link } from "react-router";
import { IconApp } from "./utils";

export function BlogCard({
  thumbnailImage,
  blogName,
  blogDesc,
  linkDetail
}) {
  return (
    <div className="w-full md:w-[80%] lg:w-[40%] h-fit bg-parsley-50 p-4 rounded-2xl mb-4">
        {/* Thumbnail */}
        <div className="w-full h-[20vh] rounded-2xl mb-6 overflow-hidden">
          {thumbnailImage ? (
            <img
              src={thumbnailImage}
              alt={"Gambar" + blogName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <span className="text-parsley-500">No Image</span>
          )}
        </div>

        {/* Description */}
        <div className="w-full h-fit mb-6">
            <p className="font-bold font-montserrat mb-2 text-[20px] text-parsley-700">
              {blogName || "blog Name"}
            </p>
            <p className="font-normal font-montserrat text-[16px] text-parsley-500">
              {blogDesc ||
                "blog Descriptions... Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
        </div>

        {/* Social + Button */}
        <Link to={linkDetail}>
          <button className="w-full cursor-pointer py-2 bg-parsley-700 text-[16px] rounded-xl flex items-center justify-center text-parsley-50 font-bold font-montserrat">
            Selengkapnya
          </button>
        </Link>
    </div>
  );
}


export function CommunityCard({
  thumbnailImage,
  communityName,
  communityDesc,
  socialLinks = [],
  linkDetail
}) {
  return (
    <div className="w-full md:w-[80%] lg:w-[40%] h-fit bg-parsley-50 p-4 rounded-2xl mb-4">
        {/* Thumbnail */}
        <div className="w-full h-[20vh] rounded-2xl mb-6 overflow-hidden">
          {thumbnailImage ? (
            <img
              src={thumbnailImage}
              alt={"Gambar" + communityName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <span className="text-parsley-500">No Image</span>
          )}
        </div>

        {/* Description */}
        <div className="w-full h-fit mb-6">
            <p className="font-bold font-montserrat mb-2 text-[20px] text-parsley-700">
              {communityName || "Comunity Name"}
            </p>
            <p className="font-normal font-montserrat text-[16px] text-parsley-500">
              {communityDesc ||
                "Comunity Descriptions... Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
        </div>

        {/* Social + Button */}
        <div className="w-full h-fit flex justify-between mb-4">
          <div className="w-[55%]  bg-parsley-200 rounded-xl flex justify-between items-center flex-wrap">
            {socialLinks.map(({ icon, url }, index) => (
              <IconApp key={index} nameIcon={icon} link={url} height={"h-[1.5rem] lg:h-[2rem]"} width={"w-[1.5rem] lg:w-[2rem]"} sizeIcon={"text-[12px] md:text-[14px] lg:text-[16px]"}/>
            ))}
          </div>
          <Link to={linkDetail} className="w-[40%] h-fit">
            <button className="w-full cursor-pointer py-2 bg-parsley-700 text-[16px] rounded-xl flex items-center justify-center text-parsley-50 font-bold font-montserrat">
              Selengkapnya
            </button>
          </Link>
        </div>
    </div>
  );
}

export function EventCard({
  thumbnailImage,
  eventName,
  eventDesc,
  socialLinks = [],
  linkDetail
}) {
  return (
    <div className="w-full md:w-[80%] lg:w-[40%] h-fit bg-parsley-50 p-4 rounded-2xl mb-4">
        {/* Thumbnail */}
        <div className="w-full h-[20vh] rounded-2xl mb-6 overflow-hidden">
          {thumbnailImage ? (
            <img
              src={thumbnailImage}
              alt={"Gambar" + eventName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <span className="text-parsley-500">No Image</span>
          )}
        </div>

        {/* Description */}
        <div className="w-full h-fit mb-6">
            <p className="font-bold font-montserrat mb-2 text-[20px] text-parsley-700">
              {eventName || "event Name"}
            </p>
            <p className="font-normal font-montserrat text-[16px] text-parsley-500">
              {eventDesc ||
                "event Descriptions... Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
        </div>

        {/* Social + Button */}
        <div className="w-full h-fit flex justify-between mb-4">
          <div className="w-[55%] bg-parsley-200 rounded-xl flex justify-between items-center flex-wrap">
            {socialLinks.map(({ icon, url }, index) => (
              <IconApp key={index} nameIcon={icon} link={url} height={"h-[1.5rem] lg:h-[2rem]"} width={"w-[1.5rem] lg:w-[2rem]"} sizeIcon={"text-[12px] md:text-[14px] lg:text-[16px]"}/>
            ))}
          </div>
          <Link to={linkDetail} className="w-[40%] h-fit">
            <button className="w-full cursor-pointer py-2 bg-parsley-700 text-[16px] rounded-xl flex items-center justify-center text-parsley-50 font-bold font-montserrat">
              Selengkapnya
            </button>
          </Link>
        </div>
    </div>
  );
}
