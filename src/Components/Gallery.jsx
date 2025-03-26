import { FaArrowDown, FaHeart } from "react-icons/fa";
import { imagesData } from "./Data";


const Gallery = () => {
  /* thirdpartyAPI - uncomment for API */
  // const apiKey = "47897092-9c2f8cae15ca662cb2e33adf1"; // Replace with your Pixabay API key
  // const [images, setImages] = useState([]);

  // const searchImages = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://pixabay.com/api/?key=${apiKey}&q=digitalarts&image_type=photo&per_page=50`
  //     );
  //     const data = await response.json();
  //     setImages(data.hits);
  //   } catch (error) {
  //     console.error("Error fetching images:", error);
  //   }
  // };

  return (
    <div className="py-16 sm:px-0 flex flex-col items-center gap-5 min-h-screen">
      <h1 className="text-5xl font-extrabold py-5 text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a]">
        Gallery
      </h1>
{/* uncomment for API call */}
      {/* <button
        onClick={() => {
          searchImages(), console.log(images);
        }}
        className="bg-[#ff0081] hover:bg-[#ff084a] text-white py-2 px-4 rounded-lg"
      >
        Fetch Images
      </button> */}

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-3 lg:columns-3 gap-0 py-4 md:px-20 px-5 ">
        {imagesData.map((image, index) => {
          if (image.webformatURL == null) return null;
          return (
            <div
              key={index}
              className="parent break-inside-avoid-column  overflow-hidden relative  group/img group transition duration-500"
              tabIndex="0" >
                <img
                  className="w-full  shadow-lg hover:shadow-xl transition duration-500  group-hover:scale-105 saturate-150 group-hover:brightness-75 group-focus:brightness-75 contrast-125 "
                  src={image.webformatURL}
                  alt={image.tags}
                />
                <div className="hidden group-hover/img:flex group-focus/img:flex flex-col items-center justify-center absolute inset-0  transition duration-500">  

              <button className="absolute top-2 left-2 flex items-stretch w-[100px] h-[35px] border-none rounded-[5px] overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.089)] cursor-pointer bg-transparent hover:[&_.leftContainer]:bg-[rgb(219,0,0)] active:[&_.leftContainer]:bg-[rgb(201,0,0)] active:[&_svg]:scale-[1.15] active:[&_svg]:origin-top">
                {/* Left container with heart icon and "Like" text */}
                <span className="leftContainer flex items-center text-xs justify-center w-[60%] h-full bg-[rgb(238,0,0)] gap-2">
                  <FaHeart className="transition-transform text-white  text-sm" />
                  <span className="like text-white font-semibold">Like</span>
                </span>

                {/* Like count with diagonal notch */}
                <span className="likeCount flex items-center text-xs justify-center w-[40%] h-full text-[#ff084a] font-semibold bg-white relative before:content-[''] before:absolute before:bg-white before:w-2 before:h-2 before:-left-1 before:rotate-45">
                  {image.likes}
                </span>
              </button>
              <div className="absolute right-1   bottom-2">
                <div className="flex items-center justify-center">
                  {[...new Set(image.tags.split(", "))].map((tag, index) => {
                    if(index>2) return null;
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

export default Gallery;
