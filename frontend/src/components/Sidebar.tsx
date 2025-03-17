import SidebarItems from "./ui/SidebarItems";
import { TfiTwitter } from "react-icons/tfi";
import { TbBrandYoutube } from "react-icons/tb";
import { LuFileSliders } from "react-icons/lu";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="px-8 py-5">
      {/* Logo Section (No Animation) */}
      <div className="text-3xl font-bold flex items-center gap-x-4">
        <SidebarItems icon={<LuBrain />} title="Second Brain" noAnimation />
      </div>

      {/* Sidebar Items */}
      <div className="mt-24 text-xl font-semibold flex flex-col gap-y-6 cursor-pointer">
        <SidebarItems icon={<TfiTwitter />} title="Twitter" />
        <SidebarItems icon={<TbBrandYoutube />} title="Youtube" />
        <SidebarItems icon={<PiLinkSimpleBold />} title="Links" />
        <SidebarItems icon={<LuFileSliders />} title="Document" />
        <SidebarItems icon={<IoPricetagsOutline />} title="Tags" />
      </div>
    </div>
  );
};

export default Sidebar;
