import SidebarItems from "./ui/SidebarItems";
import { TfiTwitter } from "react-icons/tfi";
import { TbBrandYoutube } from "react-icons/tb";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { RxNotionLogo } from "react-icons/rx";


const Sidebar = () => {
  return (
    <div className="px-8 py-5 ">

      {/* Sidebar Items */}
      <div className="text-xl font-semibold flex flex-col gap-y-6 cursor-pointer">
        <SidebarItems icon={<TfiTwitter />} title="Twitter" />
        <SidebarItems icon={<PiLinkedinLogoBold/>} title="Linked" />
        <SidebarItems icon={<FiGithub/>} title="Github" />
        <SidebarItems icon={<TbBrandYoutube />} title="Youtube" />
        <SidebarItems icon={<RxNotionLogo />} title="Notion" />
        <SidebarItems icon={<PiLinkSimpleBold />} title="Links" />
        <SidebarItems icon={<IoPricetagsOutline />} title="Tags" />
      </div>
    </div>
  );
};

export default Sidebar;
