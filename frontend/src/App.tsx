import Wallpaper from "./assets/Wallpaper.png";
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
        <div className="text-xl bg-gray-800 fixed top-0 w-full">
          <Navbar />
        </div>

        {/* Sidebar & MainSection Wrapper */}
        <div className="flex flex-grow">
          {/* Fixed Sidebar */}
          <div className="p-4 w-1/5 bg-pink-500 h-screen fixed left-0 top-[76px]">
            <Sidebar />
          </div>

          {/* Scrollable MainSection */}
          <div className="w-4/5 bg-pink-900 ml-[20%] overflow-y-auto h-screen p-4
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
