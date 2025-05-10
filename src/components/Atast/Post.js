import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegBookmark, FaBookmark, FaRegComment, FaShare } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Isitcomm from "../../assests/isitcom.png";
import Epi from "../../assests/epi.png";
import Fms from "../../assests/fms.png";
import Issat from "../../assests/issat.png";

const events = [
  {
    id: 1,
    club: "ATAST_ISITCOM",
    handle: "@Comunity_Manager",
    isLiked: false,
    isSaved: false,
    likes: 0,
    comments: 0,
    headImg: Isitcomm,
    image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a5yd1SVu4NBrnjxUV5wPfik47b8Lnn5KdM9ALf5mZc6MBOyJAlsU0S9UmEBDVhtFh~~SWir8SyJ4H02S1BixgRyNpuCT4JdJvn21s~rjVomEsiHXOifY2Et5NAv~ow5bpZYCVFkxl7t7XZQNGZWwh6p6P-xlevg~wIcLHrvMxnqCgMEbW4N-nZZb-Ge1uVTNvJsnVQj-G0xU1~NkzPAawU0gzKzKZ9T4ZM27-rDo6V7LUP8Vf2-zB7lKLwBFnwwnYnAKKRtJIr98aOHD93x7m3fYFE47vfco2nJdoWnNxCgAmWu~~bZuG7qn~nF4R6f8tjyWUoh3Dg39huUgwe6TLQ__"
  },
  {
    id: 2,
    club: "ATAST_FMS",
    handle: "@Comunity_Manager",
    headImg: Fms,
    likes: 0,
    isSaved: true,
    isLiked: false,
    comments: 0,
    image: "https://s3-alpha-sig.figma.com/img/b804/5200/dcbe8f2db0aec22af4eb6234ab290bce?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m6Mhy~kHb46w4UM0m3j~d9-WuLhHGjs4anR8IzO3smthiPVSmVk58SVnJo9Sud5NRgBE9ZcYm-K7dms2dVUCe9vKc31HAxIsOYnG8Y19-NdsvQ2zxYPMJDE8r-tiPFJfUV6tdsDg5GU4smmnXQrSUEqWOcrq1tNt5K3BJ-tRWQ1M3kOyqdh7C~dBecl7KWynDbjmiNVfmzYYPY2r4cYLMOzNcmMYdtwxEClH-Q4B2UjX-FknLHSGoQVzUB7dCXFYKdqaGSjsZEj~XaQHgrPpBmUNH61HvE6VifULK2iw-uDSKeepSm2vGRlJGkEa22Def94bZiYw5FVRcqStArYr7Q__"
  },
  {
    id: 3,
    club: "ATAST_EPI",
    handle: "@Comunity_Manager",
    isSaved: false,
    headImg: Epi,
    likes: 0,
    comments: 0,
    isLiked: true,
    image: "https://s3-alpha-sig.figma.com/img/6fab/4f21/8c7dabb60fa363f0a2bf7ed19737fafc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rD9yneTFFusIHglKCdU4GcHwQhzAOag~UsH-JAjDx1UsAUjG0Am-TRUbmUEGurV3t4lPP3x717dPIJNscMQtzcXIkpR5eSDwV6vBT9p~cWMdtNMjYJcgUwp3cuUcmoCyYvjXxccG2Nw18Sjle3dFyA7UIhKbspnCOrX0YTYLpuVapB4t0y63BFdCczBUyuYLJ2~pbRwvR929x93Y0hworLDRpnGrOVbmv-SlbXcO~3XdRwXOTQWdJZspSGFaYfna1RoJigQuBtG7mRn5UUJO3x5Qw6f7mEEFtpA4tFZZQHU7y5oKR~sm1EobXW18-CAxpH2Ut0gTwwsKZhNunrdoPQ__"
  },
  {
    id: 4,
    club: "ATAST_Issat",
    handle: "@Comunity_Manager",
    headImg: Issat,
    likes: 0,
    isSaved: true,
    isLiked: true,
    comments: 0,
    image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a5yd1SVu4NBrnjxUV5wPfik47b8Lnn5KdM9ALf5mZc6MBOyJAlsU0S9UmEBDVhtFh~~SWir8SyJ4H02S1BixgRyNpuCT4JdJvn21s~rjVomEsiHXOifY2Et5NAv~ow5bpZYCVFkxl7t7XZQNGZWwh6p6P-xlevg~wIcLHrvMxnqCgMEbW4N-nZZb-Ge1uVTNvJsnVQj-G0xU1~NkzPAawU0gzKzKZ9T4ZM27-rDo6V7LUP8Vf2-zB7lKLwBFnwwnYnAKKRtJIr98aOHD93x7m3fYFE47vfco2nJdoWnNxCgAmWu~~bZuG7qn~nF4R6f8tjyWUoh3Dg39huUgwe6TLQ__"
  }
];

const EventPost = ({ event }) => {
  const [isLiked, setIsLiked] = useState(event.isLiked);
  const [isSaved, setIsSaved] = useState(event.isSaved);
  const [likes, setLikes] = useState(event.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleImageClick = () => {
    if (event.club === "ATAST_ISITCOM") {
      navigate("/digitium");
    }
  };
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#a01426] rounded-xl p-4 mb-4 shadow-lg text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden">
            <img src={event.headImg} alt={event.club} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base">{event.club}</h4>
            <p className="text-xs sm:text-sm text-gray-300">{event.handle}</p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src={event.image} alt="Post" className="w-full h-auto object-cover" onClick={handleImageClick} />
      </div>

      {/* Engagement */}
      <div className="flex justify-between items-center mt-3 text-gray-300 bg-black/40 rounded-lg p-2">
        <div className="flex space-x-4">
          <button className="flex items-center text-xs sm:text-sm">
            <FaRegComment className="mr-1 w-5 h-5" />
            {event.comments}
          </button>
          <button 
            onClick={handleLike}
            className="focus:outline-none flex items-center text-xs sm:text-sm"
          >
            {isLiked ? (
              <FaHeart className="mr-1 w-5 h-5 transition-all text-[#a01426]" />
            ) : (
              <FaRegHeart className="mr-1 w-5 h-5 transition-all" />
            )}
            {likes}
          </button>
        </div>
        <div className="flex space-x-2">
          <FaShare className="cursor-pointer text-xs sm:text-sm w-5 h-5" />
          <button 
            onClick={handleSave}
            className="focus:outline-none"
          >
            {isSaved ? (
              <FaBookmark className="w-5 h-5 transition-all text-white" />
            ) : (
              <FaRegBookmark className="w-5 h-5 transition-all" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const EventPosts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {events.map((event) => (
        <EventPost key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventPosts;