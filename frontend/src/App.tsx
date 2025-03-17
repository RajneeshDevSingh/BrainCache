import Cards from "./components/Cards"
import CreateContent from "./components/CreateContent"
import Navbar from "./components/Navbar"
import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isBoxOpen, setBoxClose] = useState(false)

  return (
    <div className="flex">
      <CreateContent boxState={isBoxOpen} updateBoxState={setBoxClose}/>
      <div className="h-screen w-1/5 bg-pink-400"><Sidebar/></div>
      <div className="h-screen w-4/5 bg-pink-600">
        <Navbar updateBoxState={setBoxClose} />
        <Cards />
      </div>
      
    </div>
  )
}

export default App