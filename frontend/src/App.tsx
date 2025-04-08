import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ReactElement, useState } from "react";
import Wallpaper from "./assets/Wallpaper.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from "./components/AuthPage";
import AllContent from "./components/AllContent";
import RefrshHandler from "./components/RefrshHandler";
import PageNotFound from "./components/PageNotFound";



const App = () => {
  // const [isAuthDone, setAuthDone] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const PrivateRoute = ({ element }:{element:ReactElement}) => {
    return isAuthenticated ? element : <Navigate to="/auth" />
  }

  return (
    <Router>
      <div
        className="h-screen w-screen relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${Wallpaper})` }}
      >
        <ToastContainer position="top-right" autoClose={1000} />
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative text-white z-10 flex flex-col h-screen">
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
          <Routes>
          <Route path='/*' element={<PageNotFound/>} />
            <Route path="/auth" element={<AuthPage />}/>
            <Route path="/AllContent" element={<PrivateRoute element={<AllContent/>}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
