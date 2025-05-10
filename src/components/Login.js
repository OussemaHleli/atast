import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TitleImage from "../assests/AtastLogo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Add your authentication logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      navigate("/content");
    } catch (error) {
      setErrors({ submit: "Invalid email or password" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-80 p-6 bg-black rounded-lg shadow-md relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white mb-4 absolute left-8 top-12"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={20} className="mr-2" />
        </motion.button>

        <div className="flex justify-center mb-32">
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={TitleImage}
            alt="Logo"
            className="w-[136px] h-[148px]"
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-36">
          <div className="mb-4 relative">
            <div className="flex items-center border-b border-gray-700 pb-2">
              <Mail className="text-white mr-2" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black text-white focus:outline-none"
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <div className="flex items-center border-b border-gray-700 pb-2">
              <Lock className="text-white mr-2" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-black text-white focus:outline-none"
                placeholder="Password"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="ml-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </motion.button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/recover"
              className="hover:text-red-500"
            >
              Recover Account
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/forgot-password"
              className="hover:text-red-500"
            >
              Forgot Password?
            </motion.a>
          </div>

          {errors.submit && (
            <p className="text-red-500 text-sm text-center mb-4">{errors.submit}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black font-bold py-2 rounded-3xl mt-36 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Login"
            )}
          </motion.button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Don't have an account?{" "}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/signup"
              className="text-blue-400 hover:text-blue-300"
            >
              SignUp
            </motion.a>
          </p>
        </form>
      </motion.div>
    </div>
  );
}