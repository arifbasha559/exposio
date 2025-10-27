import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
    const [Data, setData] = useState([]);
  useEffect(() => {
    const searchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=47897092-9c2f8cae15ca662cb2e33adf1&q=photography&per_page=200`
        );
        const data = await response.json();
        // console.log (data);
        setData(data.hits); // Set the state with the fetched data
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    searchImages();
  }, []);
  console.log(Data);
  
  const galleryImages = [
    {
      id: 1,
      title: "Golden Hour",
      category: "Nature",
       },
    {
      id: 2,
      title: "Urban Shadows",
      category: "Cityscape",
        },
    {
      id: 3,
      title: "Silhouette Dreams",
      category: "Portrait",
      },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "The way light is captured feels almost magical.",
      author: "Sarah J.",
    },
    {
      id: 2,
      quote: "Every photo tells a story of contrast and emotion.",
      author: "Michael T.",
    },
  ];

  return (
    <div className="w-full px-20">
      {/* Hero Section */}
      <div className="hero flex flex-col justify-center items-center gap-4 py-20  md:py-40 h-auto md:h-[calc(100vh-5rem)] px-4">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r w-fit bg-clip-text from-[#ff0081] to-[#ff084a] text-center pb-3">
          Moments Captured in Light
        </h2>
        <p className="text-lg  sm:text-xl md:text-2xl font-light text-[#ff084a] text-center">
          A portfolio showcasing the beauty of light
        </p>
        <div className="additional-content mt-10 text-center max-w-2xl">
          <p className="text-base sm:text-lg md:text-xl mb-10 font-medium text-[#ff0081]">
            Explore the exquisite interplay of light and shadow through our
            curated collection of photographs.
          </p>

          <Link
            to="/gallery"
            className="px-6 sm:px-8 py-3 bg-[#ff0081] hover:bg-gradient-to-r from-[#ff0081] to-[#ff084a] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 inline-block transition duration-300 text-base sm:text-lg font-medium"
          >
            View Gallery
          </Link>
        </div>
      </div>

      {/* Gallery Preview Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#ff084a] mb-12">
          Featured Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-500 hover:scale-[1.02]"
            >
              <div className="h-48 sm:h-64 bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center">
                <img
                  className="image text-lg font-medium text-[#ff084a] h-full w-full object-cover"
                  src={Data[Math.floor(Math.random()*50)]?.webformatURL || "https://via.placeholder.com/600x400.png?text=Art+Preview"}
                  alt={image.title}
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-[#ff084a]">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gradient-to-r from-rose-100 to-pink-100 my-16 rounded-xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#ff084a] mb-12">
            What People Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/50 p-6 rounded-lg shadow-md hover:bg-white/70 transition duration-300"
              >
                <p className="text-base sm:text-lg italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-[#ff0081]">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#ff084a] mb-6">
          Ready to Illuminate Your Story?
        </h3>
        <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#ff0081] to-[#ff084a] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 text-base sm:text-lg font-medium">
          Book a Session
        </button>
      </div>
      </div>
  );
};

export default Home;
