import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ghost } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-white px-4">
      {/* Floating Ghost Animation */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        className="text-white mb-6"
      >
        <Ghost size={100} className="text-white opacity-80" />
      </motion.div>

      {/* Text Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        404 - Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-300 mb-8 text-center max-w-md"
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <Link
        to="/auth"
        className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
