import { ReactElement } from "react";

interface SidebarProps {
  icon: ReactElement;
  title: string;
  noAnimation?: boolean;
}

const SidebarItems = ({ icon, title, noAnimation }: SidebarProps) => {
  return (
    <div
      className={`flex items-center gap-x-4 text-black ${
        noAnimation ? "" : "hover:text-blue-600 transition"
      }`}>
      <div className="text-3xl">{icon}</div>
      <span className="text-lg">{title}</span>
    </div>
  );
};

export default SidebarItems;
