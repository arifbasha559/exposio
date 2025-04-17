import { FaDownload, FaHeart } from "react-icons/fa";
// import Data from "./Data";
import { useEffect, useState } from "react";
const Images = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const searchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=47897092-9c2f8cae15ca662cb2e33adf1&q=digitalarts&per_page=200`
        );
        const data = await response.json();
        // console.log (data);
        setData(data.hits); // Set the state with the fetched data
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    searchImages();
  }, []); // Empty dependency array to run once on component mount
  console.log("Data", Data);

  return (
    <div className="py-16  sm:px-0 flex flex-col items-center gap-5 min-h-screen select-none">
      <h1 className="text-5xl font-extrabold py-5 text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a]">
        Gallery
      </h1>

      <div className="columns-1 md:columns-3 lg:columns-3 gap-0 py-4 md:px-20 px-5">
        {Data.map((image, index) => {
          console.log("image", image, "index", index);

          if (!image.webformatURL) return null;
          return (
            <div
              key={index}
              className=" parent break-inside-avoid-column overflow-hidden relative group transition duration-500"
            >
              <img
                className="w-full shadow-lg hover:shadow-xl transition duration-500 group-hover:scale-105 saturate-150 group-hover:brightness-75 contrast-125"
                src={image.webformatURL}
                alt={image.tags}
              />

              <div className="hidden group-hover:flex group-focus:flex flex-col items-center justify-center absolute inset-0  transition duration-500">
                <button className="absolute top-2 left-2 flex items-stretch w-[100px] h-[35px] border-none rounded-[5px] overflow-hidden shadow-md cursor-pointer bg-transparent hover:[&_.leftContainer]:bg-[rgb(219,0,0)]">
                  <span className="leftContainer flex items-center text-xs justify-center w-[60%] h-full bg-[rgb(238,0,0)] gap-2">
                    <FaHeart className="text-white text-sm" />
                    <span className="like text-white font-semibold">Like</span>
                  </span>
                  <span className="likeCount flex items-center text-xs justify-center w-[40%] h-full text-[#ff084a] font-semibold bg-white">
                    {image.likes}
                  </span>
                </button>
                <button
                  onClick={async () => {
                    const response = await fetch(image.webformatURL, {
                      mode: "cors",
                    });
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);

                    const link = document.createElement("a");
                    link.href = url;
                    link.download = `${image.id}.jpg`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  }}
                  className="absolute top-2 right-2 flex items-center justify-center px-4 py-2 border-none rounded-lg overflow-hidden shadow-md cursor-pointer bg-black hover:bg-gradient-to-r from-[#ff0081] to-[#ff084a] text-white"
                >
                 <FaDownload  />
                </button>

                <div className="absolute right-1   bottom-2">
                  <div className="flex items-center justify-center">
                    {[...new Set(image.tags.split(", "))].map((tag, index) => {
                      if (index > 2) return null;
                      return (
                        <span
                          key={index}
                          className="inline-block bg-[#ff0081]/70 text-white text-xs px-2 py-1 rounded-full m-1"
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

export default Images;
