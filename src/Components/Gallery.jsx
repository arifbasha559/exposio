import { Link } from "react-router-dom";
import { FaImages, FaVideo, FaCamera, FaHeartbeat } from "react-icons/fa";
import { GiAbstract055 } from "react-icons/gi";

const Gallery = () => {
  return (
    <div className="py-16 sm:px-0 flex flex-col items-center gap-5 min-h-[calc(100vh-5rem)]">
      <h1 className="text-5xl font-extrabold py-5 text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a]">
        Curated Showcase
      </h1>
      <p className="text-gray-900 text-lg text-center max-w-2xl px-5">
        Experience a collection of immersive visuals, carefully curated to tell
        a story, evoke emotions, and inspire creativity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4 md:px-20 px-5">
        <Link to="Images" className="w-full h-full group/img">
          <div className="flex flex-col items-center justify-center p-10 h-full bg-white/30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition duration-500 hover:scale-[1.02] cursor-pointer relative">
            <div className="bg-white/80 p-4 rounded-full mb-4 group-hover/img:bg-[#ff0081] group-focus/img:bg-[#ff0081] transition duration-500"> 
              <FaImages className="text-3xl text-[#ff0081] group-hover/img:text-white  " />
            </div>
            <h2 className="text-3xl font-bold text-[#ff0081] drop-shadow-md">
              Explore the Photos
            </h2>
            <p className="text-gray-700 text-sm mt-2 text-center max-w-xs">
              Dive into a world of cinematic visuals, creative compositions, and
              powerful narratives.
            </p>
          </div>
        </Link>

        <Link to="Videos" className="w-full h-full group/vid">
          <div className="flex flex-col items-center justify-center p-10 h-full bg-white/30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition duration-500 hover:scale-[1.02] cursor-pointer relative">
            <div className="bg-white/80 p-4 rounded-full mb-4 group-hover/vid:bg-[#ff084a] group-focus/vid:bg-[#ff084a] transition duration-500"> 
              <FaVideo className="text-3xl text-[#ff084a] group-hover/vid:text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#ff084a] drop-shadow-md">
              Explore the Videos
            </h2>
            <p className="text-gray-700 text-sm mt-2 text-center max-w-xs">
              A handpicked selection of standout moments from our gallery.
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-16 text-center px-5 max-w-4xl">
        <h3 className="text-2xl font-semibold text-black">A Visual Journey</h3>
        <p className="text-gray-800 mt-2">
          Each piece in our collection is more than just an image or video—it's
          a story, a mood, a perspective. We invite you to experience creativity
          through a curated lens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl">
        <div className="p-6 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition duration-500 hover:scale-[1.02]">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#ff0081]/20 p-2 rounded-full">
              <FaCamera className="text-xl text-[#ff0081]" />
            </div>
            <h4 className="text-xl font-bold text-[#ff0081]">
              Cinematic Frames
            </h4>
          </div>
          <p className="text-gray-900 text-sm mt-2">
            Moments captured in motion, blending storytelling with stunning
            visuals.
          </p>
        </div>

        <div className="p-6 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition duration-500 hover:scale-[1.02]">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#ff084a]/20 p-2 rounded-full">
              <GiAbstract055 className="text-xl text-[#ff084a]" />
            </div>
            <h4 className="text-xl font-bold text-[#ff084a]">
              Abstract Perspectives
            </h4>
          </div>
          <p className="text-gray-900 text-sm mt-2">
            A different way of seeing—thought-provoking, visually stunning
            compositions.
          </p>
        </div>

        <div className="p-6 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition duration-500 hover:scale-[1.02]">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#ff0081]/20 p-2 rounded-full">
              <FaHeartbeat className="text-xl text-[#ff0081]" />
            </div>
            <h4 className="text-xl font-bold text-[#ff0081]">
              Emotion in Motion
            </h4>
          </div>
          <p className="text-gray-900 text-sm mt-2">
            Experience powerful emotions through carefully curated visual
            storytelling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
