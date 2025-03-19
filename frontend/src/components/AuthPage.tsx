import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" });
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  const handleSwitch = (toSignIn: boolean) => {
    setIsSignIn(toSignIn);
    setSignUpData({ name: "", email: "", password: "" });
    setSignInData({ email: "", password: "" });
    setShowSignUpPassword(false);
    setShowSignInPassword(false);
  };

  return (
    <div className="flex justify-center items-center gap-10 h-screen w-screen overflow-hidden bg-gradient-to-br from-blue-900 via-black to-yellow-900">
      
      {/* Sign Up Card */}
      <motion.div
        initial={{ x: -400, y: -50, opacity: 1 }}
        animate={isSignIn ? { x: 400, y: 50, opacity: 0.5, scale: 0.8 } : { x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`absolute h-3/5 w-1/4 bg-gray-800 rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-center mt-16 
        ${isSignIn ? "pointer-events-none" : "pointer-events-auto"}`}
      >
        <h2 className="text-3xl font-bold mb-4 text-purple-400 font-mono">Sign Up</h2>
        <input 
          type="text" 
          placeholder="Name" 
          className="mb-2 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono" 
          value={signUpData.name}
          onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="mb-2 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono" 
          value={signUpData.email}
          onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
        />
        <div className="relative w-full">
          <input 
            type={showSignUpPassword ? "text" : "password"} 
            placeholder="Password" 
            className="mb-4 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono" 
            value={signUpData.password}
            onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
          />
          <button 
            className="absolute top-4 right-3 text-gray-400 hover:text-white" 
            onClick={() => setShowSignUpPassword(!showSignUpPassword)}
          >
            {showSignUpPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
          </button>
        </div>
        <button className="w-full p-3 rounded bg-purple-600 text-white font-semibold hover:bg-purple-500 font-mono">
          Register
        </button>
        <p className="mt-4 text-sm text-gray-400 font-mono">
          Already have an account? 
          <span className="cursor-pointer text-blue-400 font-bold" onClick={() => handleSwitch(true)}> Sign In</span>
        </p>
      </motion.div>

      {/* Sign In Card */}
      <motion.div
        initial={{ x: 400, y: -50, opacity: 1 }}
        animate={!isSignIn ? { x: -400, y: 50, opacity: 0.5, scale: 0.8 } : { x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`absolute h-3/5 w-1/4 bg-gray-800 rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-center mt-16 
        ${!isSignIn ? "pointer-events-none" : "pointer-events-auto"}`}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400 font-mono">Sign In</h2>
        <input 
          type="email" 
          placeholder="Email" 
          className="mb-2 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" 
          value={signInData.email}
          onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
        />
        <div className="relative w-full">
          <input 
            type={showSignInPassword ? "text" : "password"} 
            placeholder="Password" 
            className="mb-4 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono" 
            value={signInData.password}
            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
          />
          <button 
            className="absolute top-4 right-3 text-gray-400 hover:text-white" 
            onClick={() => setShowSignInPassword(!showSignInPassword)}
          >
            {showSignInPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
          </button>
        </div>
        <button className="w-full p-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-500 font-mono">
          Login
        </button>
        <p className="mt-4 text-sm text-gray-400 font-mono">
          Don't have an account? 
          <span className="cursor-pointer text-purple-400 font-bold" onClick={() => handleSwitch(false)}> Sign Up</span>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
