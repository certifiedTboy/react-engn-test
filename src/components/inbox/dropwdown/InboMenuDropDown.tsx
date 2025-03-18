import { useState } from "react";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import DropDownOption from "./DropDownOption";
import { DropDownOptionProps } from "../../../interfaces/props-interfaces";

import AppIcon from "../../common/AppIcon";

const InboxMenuDropDown: React.FC<DropDownOptionProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="flex items-center gap-0 md:gap-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AppIcon value={{ color: "#000", size: "1.3em" }}>
          {!isOpen ? <GoTriangleRight /> : <GoTriangleDown />}
        </AppIcon>

        <h1 className="text-[10px] lsm:text-[12px] lg:text-[14px] font-bold">
          {name}
        </h1>
      </button>

      <>{isOpen && <DropDownOption />}</>
    </>
  );
};

export default InboxMenuDropDown;
