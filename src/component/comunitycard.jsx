import { IconApp } from "./utils";

export default function ComunityCardComponent({
  thumbnailImage,
  comunityName,
  comunityDesc,
  socialLinks = [],
  tags = [],
  buttonText = "Button"
}) {
  return (
    <div className="w-full md:w-[80%] lg:w-[45%] h-fit bg-parsley-50 p-4 rounded-2xl mb-4">
        {/* Thumbnail */}
        <div className="w-full h-[20vh] rounded-2xl mb-6 overflow-hidden">
          {thumbnailImage ? (
            <img
              src={thumbnailImage}
              alt={"Gambar" + comunityName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <span className="text-parsley-500">No Image</span>
          )}
        </div>

        {/* Tags */}
        {/* {tags.length > 0 && (
          <div className="mx-[6vh_2vh] mt-[1vh] w-full flex justify-start">
            <div className="flex gap-[2vw] flex-wrap">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="bg-[#d9d9d9] rounded-full px-4 h-[3vh] font-montserrat font-bold flex items-center justify-center border-2"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        )} */}

        {/* Description */}
        <div className="w-full h-fit mb-6">
            <p className="font-bold font-montserrat mb-2 text-[20px] text-parsley-700">
              {comunityName || "Comunity Name"}
            </p>
            <p className="font-normal font-montserrat text-[16px] text-parsley-500">
              {comunityDesc ||
                "Comunity Descriptions... Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
        </div>

        {/* Social + Button */}
        <div className="w-full h-fit flex justify-between mb-4">
          <div className="w-[55%] flex justify-between items-center flex-wrap">
            {socialLinks.map(({ icon, url }, index) => (
              <IconApp key={index} nameIcon={icon} link={url} height={"h-[2.2rem]"} width={"w-[2.2rem]"}/>
            ))}
          </div>
          <button className="w-[40%] py-2 bg-parsley-700 text-[16px] rounded-xl flex items-center justify-center text-parsley-50 font-bold font-montserrat">
            {buttonText}
          </button>
        </div>
    </div>
  );
}
