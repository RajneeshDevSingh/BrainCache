import { LuFileSliders } from "react-icons/lu";
import { RiShareFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex wrap my-10">
      <div className="h-96 w-72 bg-red-400 rounded-2xl border-slate-500 m-8">
        <div className="flex p-6 justify-between font-semibold items-center text-xl cursor-pointer">
          <LuFileSliders />
          <h2 className="cursor-default">Project Ideas</h2>
          <RiShareFill />
          <FaTrash />
        </div>

        <div className="mx-6">
          <h1 className="font-semibold text-lg">Future Projects</h1>
          <div>
            <li>Bulit a project</li>
            <li>Bulit a project and deploy</li>
            <li>Bulit a project with design</li>
          </div>
        </div>
      </div>
      <div className="h-96 w-72 bg-red-400 rounded-2xl border-slate-500 m-8">
        <h2>Hello</h2>
      </div>
      <div className="h-96 w-72 bg-red-400 rounded-2xl border-slate-500 m-8">
        <h2>Hello</h2>
      </div>
    </div>
  );
};

export default Cards;
