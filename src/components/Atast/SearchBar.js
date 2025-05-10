import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Users, Calendar, Image } from "lucide-react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // Mock search results - replace with actual API calls
  const mockResults = [
    {
      id: 1,
      type: "user",
      name: "Ahmed Baya",
      avatar: "https://i.pravatar.cc/150?img=1",
      role: "Student",
      isOnline: true
    },
    {
      id: 2,
      type: "event",
      title: "Digitium 2024",
      image: "https://s3-alpha-sig.figma.com/img/7a8f/06b9/4893b8e26190e386534df1995857a42a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a5yd1SVu4NBrnjxUV5wPfik47b8Lnn5KdM9ALf5mZc6MBOyJAlsU0S9UmEBDVhtFh~~SWir8SyJ4H02S1BixgRyNpuCT4JdJvn21s~rjVomEsiHXOifY2Et5NAv~ow5bpZYCVFkxl7t7XZQNGZWwh6p6P-xlevg~wIcLHrvMxnqCgMEbW4N-nZZb-Ge1uVTNvJsnVQj-G0xU1~NkzPAawU0gzKzKZ9T4ZM27-rDo6V7LUP8Vf2-zB7lKLwBFnwwnYnAKKRtJIr98aOHD93x7m3fYFE47vfco2nJdoWnNxCgAmWu~~bZuG7qn~nF4R6f8tjyWUoh3Dg39huUgwe6TLQ__",
      date: "2024-03-15"
    },
    {
      id: 3,
      type: "post",
      title: "New Club Announcement",
      image: "https://s3-alpha-sig.figma.com/img/b804/5200/dcbe8f2db0aec22af4eb6234ab290bce?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m6Mhy~kHb46w4UM0m3j~d9-WuLhHGjs4anR8IzO3smthiPVSmVk58SVnJo9Sud5NRgBE9ZcYm-K7dms2dVUCe9vKc31HAxIsOYnG8Y19-NdsvQ2zxYPMJDE8r-tiPFJfUV6tdsDg5GU4smmnXQrSUEqWOcrq1tNt5K3BJ-tRWQ1M3kOyqdh7C~dBecl7KWynDbjmiNVfmzYYPY2r4cYLMOzNcmMYdtwxEClH-Q4B2UjX-FknLHSGoQVzUB7dCXFYKdqaGSjsZEj~XaQHgrPpBmUNH61HvE6VifULK2iw-uDSKeepSm2vGRlJGkEa22Def94bZiYw5FVRcqStArYr7Q__",
      date: "2024-03-14"
    }
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      // Filter results based on search query and active tab
      const filtered = mockResults.filter(result => {
        const matchesQuery = result.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.title?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTab = activeTab === "all" || result.type === activeTab;
        return matchesQuery && matchesTab;
      });
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, activeTab]);

  const handleClear = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen bg-[#121212] p-4">
      {/* Search Header */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Search</h1>
        
        {/* Search Input */}
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Search for users, events, or posts..."
              className="w-full bg-[#1e1e1e] text-white rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#5c030b] transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            {searchQuery && (
              <button
                onClick={handleClear}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Search Tabs */}
        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "all" ? "bg-[#5c030b] text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <Search size={18} />
            <span>All</span>
          </button>
          <button
            onClick={() => setActiveTab("user")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "user" ? "bg-[#5c030b] text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <Users size={18} />
            <span>Users</span>
          </button>
          <button
            onClick={() => setActiveTab("event")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "event" ? "bg-[#5c030b] text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <Calendar size={18} />
            <span>Events</span>
          </button>
          <button
            onClick={() => setActiveTab("post")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "post" ? "bg-[#5c030b] text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <Image size={18} />
            <span>Posts</span>
      </button>
        </div>

        {/* Search Results */}
        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 space-y-4"
            >
              {searchResults.map((result) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-[#1e1e1e] rounded-xl p-4 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                >
                  {result.type === "user" && (
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={result.avatar}
                          alt={result.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {result.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1e1e1e]" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{result.name}</h3>
                        <p className="text-gray-400 text-sm">{result.role}</p>
                      </div>
                    </div>
                  )}
                  {(result.type === "event" || result.type === "post") && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-white font-semibold">{result.title}</h3>
                          <p className="text-gray-400 text-sm">{result.date}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {searchQuery && searchResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-gray-400"
          >
            No results found for "{searchQuery}"
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
