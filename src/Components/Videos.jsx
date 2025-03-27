import { useEffect, useState } from "react";
import { FaArrowDown, FaHeart } from "react-icons/fa";


const Videos = () => {
 const apiKey = "47897092-9c2f8cae15ca662cb2e33adf1"; // Replace with your Pixabay API key
   const [Data, setData] = useState([]);
 useEffect(() => {
 
 
   const fetchVideos = async () => {
     try {
       const response = await fetch(
         `https://pixabay.com/api/videos/?key=${apiKey}&q=cinematics&image_type=video&per_page=50`
       );
       const data = await response.json();
       // console.log (data);
       setData(data.hits); // Set the state with the fetched data
     } catch (error) {
       console.error("Error fetching images:", error);
     }
   };
   fetchVideos();
 }, []); // Empty dependency array to run once on component mount
 
  return (
    <div className="py-16 flex flex-col items-center gap-5 min-h-screen max-w-[2080px] mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold py-5 text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a]">
        Video Gallery
      </h1>

      {/* Responsive Column Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-0  px-4 md:px-10 py-4">
        {Data.map((image) => {
          if (image.tags === "subscribe" || image.tags === "clock") return null;

          return (
            <div
              key={image.id}
              className="break-inside-avoid overflow-hidden transition-all duration-500 relative group"
              tabIndex="0"
              onMouseEnter={(e) =>
                e.currentTarget.querySelector("video").play()
              }
              onMouseLeave={(e) =>
                e.currentTarget.querySelector("video").pause()
              }
              onFocus={(e) => e.currentTarget.querySelector("video").play()}
              onBlur={(e) => e.currentTarget.querySelector("video").pause()}
            >
              {/* Video */}
              <video
                src={image.videos.tiny.url}
                className="w-full h-auto transition duration-500 scale-[1.05] group-hover:scale-105 saturate-150   contrast-125"
                muted
                loop
                playsInline
              />

              <div className="hidden group-hover:flex group-focus:flex flex-col items-center justify-center absolute inset-0  transition duration-500">
                <button
                  className="absolute top-2 left-2 flex items-stretch w-[100px] h-[35px] border-none rounded-[5px] overflow-hidden shadow-md cursor-pointer bg-transparent hover:[&_.leftContainer]:bg-[rgb(219,0,0)]"
                  
                >
                  <span className="leftContainer flex items-center text-xs justify-center w-[60%] h-full bg-[rgb(238,0,0)] gap-2">
                    <FaHeart className="text-white text-sm" />
                    <span className="like text-white font-semibold">Like</span>
                  </span>
                  <span className="likeCount flex items-center text-xs justify-center w-[40%] h-full text-[#ff084a] font-semibold bg-white">
                    {image.likes}
                  </span>
                </button>
                <div className="absolute right-1   bottom-2">
                  <div className="flex items-center justify-center">
                    {[...new Set(image.tags.split(", "))].map((tag, index) => {
                      if (index > 2) return null;
                      return (
                        <span
                          key={index}
                          className="inline-block bg-[#ff0081]/50 text-white text-xs px-2 py-1 rounded-full m-1"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
