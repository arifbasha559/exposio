import { FaArrowDown, FaHeart } from "react-icons/fa";

import { Data } from "./VideosData";
import { useState } from "react";

const Videos = () => {
  const [likes, setLikes] = useState(
    Data.reduce((acc, image) => {
      acc[image.id] = image.likes;
      return acc;
    }, {})
  );
  const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173/api/likes.js" // Change 3000 if using another port for Vercel dev
    : "/api/likes.js";

const handleLike = async (id,type) => {
  try {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id , type}),
      });
      const data = await response;
    console.log("Server Response:", data);

      if (response.ok) {
        setLikes((prevLikes) => ({
          ...prevLikes,
          [id]: prevLikes[id] + 1,
        }));
      } else {
        console.error("Failed to update like count");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
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
                  onClick={() => handleLike(image.id,"video")}
                >
                  <span className="leftContainer flex items-center text-xs justify-center w-[60%] h-full bg-[rgb(238,0,0)] gap-2">
                    <FaHeart className="text-white text-sm" />
                    <span className="like text-white font-semibold">Like</span>
                  </span>
                  <span className="likeCount flex items-center text-xs justify-center w-[40%] h-full text-[#ff084a] font-semibold bg-white">
                    {likes[image.id]}
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
