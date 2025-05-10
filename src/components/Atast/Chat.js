import { ArrowLeft, Send, MoreVertical, Search } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const initialMessages = [
  { 
    id: 1, 
    name: "Ahmed_Baya", 
    role: "Community_Manager", 
    time: "1 hour", 
    message: "Hey everyone! Welcome to our community chat. Let's make this space awesome! 🚀", 
    avatar: "https://i.pravatar.cc/150?img=1",
    isOnline: true
  },
  { 
    id: 2, 
    name: "Rima_Jerbi", 
    role: "Vise_President", 
    time: "3 hour", 
    message: "Thanks Ahmed! Looking forward to collaborating with everyone here. 💪", 
    avatar: "https://i.pravatar.cc/150?img=5",
    isOnline: false
  },
  { 
    id: 3, 
    name: "Ahmed_Baya", 
    role: "Community_Manager", 
    time: "11 hour", 
    message: "Don't forget about our upcoming event this weekend! 🎉", 
    avatar: "https://i.pravatar.cc/150?img=1",
    isOnline: true
  },
  { 
    id: 4, 
    name: "Eya_Rejeb", 
    role: "President", 
    time: "1 day", 
    message: "Great initiative! Let's make this community even stronger together. 🌟", 
    avatar: "https://i.pravatar.cc/150?img=8",
    isOnline: true
  }
];

const defaultAvatar = "https://i.pravatar.cc/150?img=3";

const Chat = () => {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        name: "You",
        role: "User",
        time: "Just now",
        message: newMessage.trim(),
        avatar: defaultAvatar,
        isOnline: true
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#121212]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-[#1a1a1a] border-b border-[#2a2a2a]">
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <h1 className="text-white text-xl font-semibold">Community Chat</h1>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-white"
          >
            <Search className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white"
          >
            <MoreVertical className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#1a1a1a] px-4 py-2"
          >
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full bg-[#2a2a2a] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5c030b]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id}
            className="flex items-start space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#2a2a2a] overflow-hidden">
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultAvatar;
                  }}
                />
              </div>
              {msg.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#121212]" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">{msg.name}</span>
                <span className="text-gray-400 text-sm">@{msg.role}</span>
                <span className="text-gray-500 text-xs">{msg.time}</span>
              </div>
              <div className="mt-1 bg-[#1a1a1a] rounded-lg p-3 text-white">
                {msg.message}
              </div>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="p-4 bg-[#1a1a1a] border-t border-[#2a2a2a]">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-[#2a2a2a] text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5c030b]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-[#5c030b] text-white rounded-full p-2 hover:bg-[#7a040e] transition-colors"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
