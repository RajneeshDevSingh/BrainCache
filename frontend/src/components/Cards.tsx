import { LuFileSliders } from "react-icons/lu";
import { RiShareFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { TbBrandYoutube } from "react-icons/tb";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { RxNotionLogo } from "react-icons/rx";

const Cards = () => {
  return (
    <div className="flex flex-wrap mx-auto items-center gap-4">

  <div className="flex flex-col w-64 h-96 rounded-xl p-2 border-2 border-white bg-transparent text-white">
    <div className="flex justify-around items-center">
      <span><TfiTwitter /></span>
      <span>Twitter</span>
      <span className="hover:text-red-600 cursor-pointer"><FaTrash /></span>
    </div>
    <div className="mt-2 w-full max-h-72 rounded-xl overflow-hidden flex items-center justify-center border-2 border-gray-400 p-2">
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">AI is expensive but it&#39;s a good domain for me. <a href="https://t.co/sGTBq50AUU">pic.twitter.com/sGTBq50AUU</a></p>&mdash; Hitesh Choudhary (@Hiteshdotcom) <a href="https://twitter.com/Hiteshdotcom/status/1910304891777458341?ref_src=twsrc%5Etfw">April 10, 2025</a></blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
    <div className="mt-2 p-1 w-full max-h-44 min-h-24 overflow-x-hidden overflow-y-auto custom-scrollbar">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </div>
  </div>

 

  <div className="flex flex-col w-72 h-96 rounded-xl p-2 border-2 border-white bg-transparent text-white">
    <div className="flex justify-around items-center">
      <span><PiLinkedinLogoBold /></span>
      <span>LinkedIn</span>
      <span className="hover:text-red-600 cursor-pointer"><FaTrash /></span>
    </div>
    <div className="mt-2 w-full h-72 rounded-xl overflow-hidden flex items-center justify-center border-2 border-gray-400 pl-5 pt-5">
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7306262612537704448?collapsed=1" height="399" width="504" frameBorder="0" allowFullScreen title="Embedded post"></iframe>
    </div>
    <div className="mt-2 p-1 w-full h-24 overflow-x-hidden overflow-y-auto custom-scrollbar">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </div>
  </div>

  <div className="flex flex-col w-72 h-96 rounded-xl p-2 border-2 border-white bg-transparent text-white">
    <div className="flex justify-around items-center">
      <span><FiGithub /></span>
      <span>Github</span>
      <span className="hover:text-red-600 cursor-pointer"><FaTrash /></span>
    </div>
    <div className="mt-2 w-full max-h-72 rounded-xl overflow-hidden flex items-center justify-center border-2 border-gray-400 p-2">
      <span>https://github.com/100xdevs-cohort-3/week-8-course-selling-project.git</span>
    </div>
    <div className="mt-2 p-1 w-full max-h-52 overflow-x-hidden overflow-y-auto custom-scrollbar">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </div>
  </div>


  <div className="flex flex-col w-72 h-96 rounded-xl p-2 border-2 border-white bg-transparent text-white">
    <div className="flex justify-around items-center text-lg">
      <span><TbBrandYoutube /></span>
      <span>Youtube</span>
      <span className="hover:text-red-600 cursor-pointer"><FaTrash /></span>
    </div>
    <div className="mt-2 w-full h-72 rounded-xl overflow-hidden flex items-center justify-center border-2 border-gray-400 pl-5 pt-5">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8367ETnagHo?si=5YXnPeIPvHsuACqM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="mt-2 p-1 w-full h-24 overflow-x-hidden overflow-y-auto custom-scrollbar">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </div>
  </div>
  

</div>

  );
};

export default Cards;
