/*eslint-disable*/
import { useState } from "react";
import plusSvg from "../assets/images/icon-plus.svg";
import minusSvg from "../assets/images/icon-minus.svg";
const Accordion = ({ question, answer }) => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  return (
    <div className="w-full px-4">
      <div
        className="flex items-center justify-between w-full px-2 my-4 cursor-pointer font-workSans"
        onClick={() => setToggleCollapse((visible) => !visible)}
      >
        <h5 className="text-sm font-bold text-darkPurple hover:text-[#AD28EB]">
          {question}
        </h5>
        <img src={!toggleCollapse ? plusSvg : minusSvg} className="w-6 h-6" />
      </div>
      <div
        className={`grid py-3 ${toggleCollapse ? "grid-row-[1fr]" : "hidden"}`}
      >
        <span className="px-2 text-sm font-normal leading-6 text-slate-400">
          {answer}
        </span>
      </div>
    </div>
  );
};

export default Accordion;
