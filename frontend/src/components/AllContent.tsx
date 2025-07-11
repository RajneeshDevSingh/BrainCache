import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import { useState } from "react";


const AllContent = () => {
  const [CurrentboxState, setBoxState] = useState<boolean>(false);    
  return (
    <div><div className="text-xl fixed top-0 w-full">
    <Navbar toggleCreateBox={() => setBoxState(!CurrentboxState)}/>
  </div>

  <div className="flex flex-grow">
    <div className="p-4 w-1/5 h-screen fixed left-0 top-20">
      <Sidebar />
    </div>

    <div className="content-container">
      <MainSection boxState={CurrentboxState} updateBoxState={setBoxState}/>
    </div> 

  </div></div>
  )
}

export default AllContent

   {/* <div className={`z-20  ${CurrentboxState == true ? 'block':'hidden'} `}></div>  */}




