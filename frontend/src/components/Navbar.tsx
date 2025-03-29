
import Button from "./ui/Button"; // Adjust the path as needed
import { FaPlus } from "react-icons/fa"; // Import icons from react-icons
import { RiShareFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
import SidebarItems from "./ui/SidebarItems";
import { LuBrain } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-4 mx-10">
      <div className="font-bold flex items-center gap-x-4">
        <SidebarItems icon={<LuBrain />} title="Second Brain" noAnimation/>
      </div>

      <div className="flex justify-center gap-2 ">
        <Button
          variant="primary"
          size="sm"
          text="Share Brain"
          startIcon={<RiShareFill />}
          fullWidth={true}
        />
        <Button
          variant="secondary"
          size="sm"
          text="Content"
          startIcon={<FaPlus />}
          fullWidth={true}/>
      </div>

      <div>
          <span className="text-2xl text-white ">
            <FaRegUser />
          </span>
      </div>
    </div>
  );
};

export default Navbar;