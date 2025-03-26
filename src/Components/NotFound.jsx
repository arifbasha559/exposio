import { FaSkullCrossbones } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] text-gray-800 text-center">
      <h1 className="text-4xl font-bold mb-4"><FaSkullCrossbones className="text-9xl "/></h1>
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 sm:px-8 py-3 bg-[#ff0081] hover:bg-gradient-to-r from-[#ff0081] to-[#ff084a] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 text-base sm:text-lg font-medium"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
