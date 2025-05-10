import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const StoryViewer = ({ story, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            onClose();
            return 100;
          }
          return prev + 1;
        });
      }, 30); // 3 seconds total duration

      return () => clearInterval(timer);
    }
  }, [isPaused, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      onClick={() => setIsPaused(!isPaused)}
    >
      {/* Progress Bar */}
      <div className="absolute top-4 left-4 right-4 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white z-10"
      >
        <X size={24} />
      </button>

      {/* Story Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={story.img}
          alt={story.name}
          className="max-h-[80vh] max-w-[80vw] object-contain"
        />
        
        {/* Story Info */}
        <div className="absolute bottom-8 left-4 right-4 flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
            <img
              src={story.img}
              alt={story.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-white font-semibold">{story.name}</h3>
            <p className="text-gray-300 text-sm">Tap to {isPaused ? "play" : "pause"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryViewer; 