

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { z } from "zod";
import { LuBrain } from "react-icons/lu";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



// Define Zod Validation Schema
const signUpSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .regex(/^[A-Za-z\s]+$/, "Name should contain only letters and spaces"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});


const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

const AuthPage = ({ toggleAuthState }: { toggleAuthState: (authState: boolean) => void }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const navigate = useNavigate();

  const handleSwitch = (toSignIn: boolean) => {
    setIsSignIn(toSignIn);
    resetSignUp();
    resetSignIn();
    setShowSignUpPassword(false);
    setShowSignInPassword(false);
  };


  type SignUpFormData = {
    name: string;
    email: string;
    password: string;
  };

  type SignInFormData = {
    email: string;
    password: string;
  };


  // React Hook Form for SignUp
  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
    reset: resetSignUp,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  // React Hook Form for SignIn
  const {
    register: registerSignIn,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors },
    reset: resetSignIn,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  // Handle Form Submission
const onSignUpSubmit = async (data: SignUpFormData) => {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      toast.success("Signup Successful!");
      toggleAuthState(true);
      navigate("/AllContent")
    } else {
      toast.error(response.data.message || "Signup failed.");
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data?.message || "Server error");
    } else if (error instanceof Error) {
      toast.error("An error occurred: " + error.message);
    } else {
      toast.error("An unexpected error occurred.");
    }
  }
  
};

 
const onSignInSubmit = async (data: SignInFormData) => {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/signIn", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      toast.success("SignIn Successful!");
        const JWT = response.data.token;
        localStorage.setItem("token", JWT);
        toggleAuthState(true);
        navigate("/AllContent")
    } else {
      toast.error(`SignIn Failed: ${response.data.message}`);
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data?.message || "Server error");
    } else if (error instanceof Error) {
      toast.error("An error occurred: " + error.message);
    } else {
      toast.error("An unexpected error occurred");
    }
  }
};


  return (
    <div className="flex justify-center items-center gap-10 h-screen w-screen overflow-hidden">
      
     
      <div className="absolute top-5 left-5">
        <div className="flex items-center gap-2"><span className="text-4xl font-bold text-purple-400"><LuBrain/></span><span className="text-2xl font-bold text-blue-600 font-mono ">BrainCache</span></div>
      </div>
       {/* Sign Up Card */}
      <motion.div
        initial={{ x: -400, y: -50, opacity: 1 }}
        animate={!isSignIn ? { x: 0, opacity: 1, scale: 1 } : { x: -400, y: 50, opacity: 0.5, scale: 0.7 }}
        transition={{ duration: 0.8, type: "spring" }}
        className={`absolute h-4/6 w-1/4 bg-gray-800 rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-center mt-16 
        ${isSignIn ? "pointer-events-none" : "pointer-events-auto"}`}
      > 
        <h2 className="text-3xl font-bold mb-4 text-purple-400 font-mono">Sign Up</h2>
        <form onSubmit={handleSignUpSubmit(onSignUpSubmit)} className="w-full">
          <input 
            type="text"
            placeholder="Name"
            className="mb-2 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
            {...registerSignUp("name")}
          />
          {signUpErrors.name && <p className="text-red-500 text-sm pb-2 ml-3">{signUpErrors.name.message}</p>}

          <input 
            type="text"
            placeholder="Email"
            className="mb-2 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
            {...registerSignUp("email")}
          />
          {signUpErrors.email && <p className="text-red-500 text-sm pb-2 ml-3">{signUpErrors.email.message}</p>}

          <div className="relative w-full">
            <input 
              type={showSignUpPassword ? "text" : "password"}
              placeholder="Password"
              className="mb-4 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
              {...registerSignUp("password")}
            />
            <button 
              className="absolute top-4 right-3 text-gray-400 hover:text-white"
              type="button"
              onClick={() => setShowSignUpPassword(!showSignUpPassword)}
            >
              {showSignUpPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
            </button>
          </div>
          {signUpErrors.password && <p className="text-red-500 text-sm pb-3 ml-3 -mt-2">{signUpErrors.password.message}</p>}

          <button type="submit" className="w-full p-3 rounded bg-purple-600 text-white font-semibold hover:bg-purple-500 font-mono">
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400 font-mono ">
          Already have an account? 
          <span className="cursor-pointer text-blue-400 font-bold" onClick={() => setIsSignIn(true)}> Sign In</span>
        </p>
      </motion.div>

      {/* Sign In Card */}
      <motion.div
        initial={{ x: 400, y: -50, opacity: 1 , gap:5}}
        animate={isSignIn ? { x: 0, opacity: 1, scale: 1 } : { x: 400, y: 70, opacity: 0.5, scale: 0.7 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`absolute h-3/5 w-1/4 bg-gray-800 rounded-xl shadow-lg p-6 text-white flex flex-col items-center justify-center mt-16 
        ${!isSignIn ? "pointer-events-none" : "pointer-events-auto"}`}
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400 font-mono">Sign In</h2>
        <form onSubmit={handleSignInSubmit(onSignInSubmit)} className="w-full">
          <input 
            type="text"
            placeholder="Email"
            className="mb-2 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            {...registerSignIn("email")}
          />
          {signInErrors.email && <p className="text-red-500 text-sm pb-2 ml-3">{signInErrors.email.message}</p>}

          <div className="relative w-full">
            <input 
              type={showSignInPassword ? "text" : "password"}
              placeholder="Password"
              className="mb-4 w-full p-3 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              {...registerSignIn("password")}
            />
            <button 
              className="absolute top-4 right-3 text-gray-400 hover:text-white"
              type="button"
              onClick={() => setShowSignInPassword(!showSignInPassword)}
            >
              {showSignInPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
            </button>
          </div>
          {signInErrors.password && <p className="text-red-500 text-sm pb-2 ml-3 -mt-2">{signInErrors.password.message}</p>}

          <button type="submit" className="w-full p-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-500 font-mono">
            Login
          </button>
          <p className="mt-4 text-sm text-gray-400 font-mono text-center">
          Don't have an account? 
          <span className="cursor-pointer text-purple-400 font-bold" onClick={() => handleSwitch(false)}> Sign Up</span>
        </p>

        </form>
      </motion.div>
    </div>
  );
};

export default AuthPage;

