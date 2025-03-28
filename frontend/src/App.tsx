import Wallpaper from "./assets/Wallpaper.png";
import AuthPage from "./components/AuthPage";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div
      className="h-screen w-screen relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${Wallpaper})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Content wrapper */}
      <div className="relative text-white z-10 flex flex-col h-screen">
        {/* Fixed Navbar */}

        {/* <AuthPage/> */}
        <div className="text-xl fixed top-0 w-full">
          <Navbar />
        </div>

        <div className="flex flex-grow">
          <div className="p-4 w-1/5 h-screen fixed left-0 top-20">
            <Sidebar />
          </div>

          <div className="w-4/5 ml-[20%] overflow-y-auto h-screen p-4
                [&::-webkit-scrollbar]:w-2 
                [&::-webkit-scrollbar-track]:bg-gray-800 
                [&::-webkit-scrollbar-thumb]:bg-gray-500 
                [&::-webkit-scrollbar-thumb]:rounded-full 
                hover:[&::-webkit-scrollbar-thumb]:bg-gray-400">
            <MainSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App
