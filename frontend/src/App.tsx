import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import Wallpaper from "./assets/Wallpaper.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "./components/AuthPage";
import AllContent from "./components/AllContent";

// Protected Route Component
interface ProtectedRouteProps {
  isAuthDone: boolean;
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthDone, children }) => {
  return isAuthDone ? children : <Navigate to="/auth" />;
};

// Public Route Component (Prevents Access if Logged In)
const PublicRoute: React.FC<ProtectedRouteProps> = ({ isAuthDone, children }) => {
  return isAuthDone ? <Navigate to="/AllContent" /> : children;
};

const App = () => {
  const [isAuthDone, setAuthDone] = useState<boolean>(
    () => JSON.parse(localStorage.getItem("isAuthDone") || "false")
  );

  useEffect(() => {
    localStorage.setItem("isAuthDone", JSON.stringify(isAuthDone));
  }, [isAuthDone]);

  return (
    <Router>
      <div
        className="h-screen w-screen relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${Wallpaper})` }}
      >
        <ToastContainer position="top-right" autoClose={2000} />
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative text-white z-10 flex flex-col h-screen">
          <Routes>
            {/* Public Route - Prevent Access if Already Logged In */}
            <Route
              path="/auth"
              element={
                <PublicRoute isAuthDone={isAuthDone}>
                  <AuthPage toggleAuthState={setAuthDone} />
                </PublicRoute>
              }
            />

            {/* Protected Route - Show main content only if authenticated */}
            <Route
              path="/AllContent"
              element={
                <ProtectedRoute isAuthDone={isAuthDone}>
                  <AllContent />
                </ProtectedRoute>
              }
            />

            {/* Redirect to correct page based on auth state */}
            <Route path="*" element={<Navigate to={isAuthDone ? "/AllContent" : "/auth"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
