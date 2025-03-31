import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";


const AllContent = () => {
  return (
    <div><div className="text-xl fixed top-0 w-full">
    <Navbar />
  </div>

  <div className="flex flex-grow">
    <div className="p-4 w-1/5 h-screen fixed left-0 top-20">
      <Sidebar />
    </div>

    <div className="content-container">
      <MainSection />
    </div> 
  </div></div>
  )
}

export default AllContent



