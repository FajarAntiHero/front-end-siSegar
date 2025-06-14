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
    <div className="m-[1vh_1vw] flex justify-center">
      <div className="bg-parsley-100 w-[95%] rounded-3xl flex flex-col items-center">

        {/* Thumbnail */}
        <div className="bg-[#d9d9d9] w-[90%] h-[22vh] rounded-2xl mt-[2vh] flex items-center justify-center overflow-hidden">
          {thumbnailImage ? (
            <img
              src={thumbnailImage}
              alt="Thumbnail"
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
        {tags.length > 0 && (
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
        )}

        {/* Description */}
        <div className="mx-[6vh] mt-[2vh] w-[90%] flex justify-start mb-[2vh]">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold font-montserrat text-xl text-parsley-700">
              {comunityName || "Comunity Name"}
            </h1>
            <p className="font-normal font-montserrat text-sm text-parsley-500">
              {comunityDesc ||
                "Comunity Descriptions... Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
          </div>
        </div>

        {/* Social + Button */}
        <div className="mx-[6vh] mt-[1vh] w-[90%] flex justify-between items-center mb-[2vh]">
          <div className="flex gap-[1vw] justify-center items-center flex-wrap">
            {socialLinks.map(({ icon, url }, index) => (
              <IconApp key={index} nameIcon={icon} link={url} />
            ))}
          </div>
          <button className="w-[28vw] h-[6vh] bg-[#d9d9d9] rounded-4xl flex items-center justify-center">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
