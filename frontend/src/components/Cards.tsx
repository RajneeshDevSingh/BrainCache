import { LuFileSliders } from "react-icons/lu";
import { RiShareFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex flex-wrap mx-auto gap-3">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="h-96 w-72 bg-red-400 rounded-2xl border border-slate-500 p-4">
          <div className="flex p-4 justify-between font-semibold items-center text-xl cursor-pointer">
            <LuFileSliders />
            <h2 className="cursor-default">Project Ideas {index + 1}</h2>
            <RiShareFill />
            <FaTrash />
          </div>

          <div className="mx-4">
            <h1 className="font-semibold text-lg">Future Projects</h1>
            <ul className="list-disc pl-4">
              <li>Build a project</li>
              <li>Build a project and deploy</li>
              <li>Build a project with design</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
