import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 max-w-lg text-center text-white">
        
        <h1 className="text-9xl font-extrabold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-bounce">
          404
        </h1>

        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-300 mt-3">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 hover:scale-105 transform transition-all duration-300 shadow-lg"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}