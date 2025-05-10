import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Isitcomm from "../../assests/isitcom.png";
import SS from "../../assests/redstudentsection.png";
import Epi from "../../assests/epi.png";
import Fms from "../../assests/fms.png";
import Issat from "../../assests/issat.png";
import Tbs from "../../assests/tbs.png";
import StoryViewer from "./StoryViewer";

const stories = [
  { name: "ISITCOM", img: Isitcomm },
  { name: "FMS", img: Fms },
  { name: "ISSATSo", img: Issat},
  { name: "EPI", img: Epi },
  { name: "Student Section", img: SS },
  { name: "TBS", img: Tbs}
];

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <>
      <div className="flex space-x-4 py-4 px-0 overflow-x-auto whitespace-nowrap bg-[#121212]" style={{ scrollbarWidth: "none" }}>
        {stories.map((story, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center flex-shrink-0 first:ml-4 cursor-pointer"
            onClick={() => setSelectedStory(story)}
          >
            <div className="w-20 h-20 border-4 border-red-900 rounded-full flex items-center justify-center overflow-hidden">
              <img src={story.img} alt={story.name} className="w-full h-full object-cover bg-gray-300" />
            </div>
            <span className="text-white mt-2 text-sm font-bold">{story.name}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedStory && (
          <StoryViewer
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Stories;
