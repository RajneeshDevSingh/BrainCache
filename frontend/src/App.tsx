import Cards from "./components/Cards";
import CreateContent from "./components/CreateContent";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthPage from "./components/AuthPage";

const App = () => {
  // const [isBoxOpen, setBoxClose] = useState(false);

  return (
    <AuthPage/>
  );
};

export default App;




{/* <BrowserRouter>
<div className="flex">
  <CreateContent boxState={isBoxOpen} updateBoxState={setBoxClose} />
  <div className="h-screen w-1/5 bg-pink-400">
    <Sidebar />
  </div>
  <div className="h-screen w-4/5 bg-pink-600">
    
    <Navbar updateBoxState={setBoxClose} />
    <Routes>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
    <Cards />
  </div>
</div>
</BrowserRouter> */}
