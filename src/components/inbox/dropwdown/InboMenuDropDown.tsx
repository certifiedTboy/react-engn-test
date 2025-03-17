import { useState } from "react";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { AnimatePresence } from "framer-motion";
import DropDownOption from "./DropDownOption";

import AppIcon from "../../common/AppIcon";

const InboxMenuDropDown: React.FC<{
  name: string;
}> = ({ name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full">
      <button
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AppIcon value={{ color: "#000", size: "1.3em" }}>
          {!isOpen ? <GoTriangleRight /> : <GoTriangleDown />}
        </AppIcon>

        <h1 className="text-[15px] font-bold"> {name}</h1>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div>
            <DropDownOption />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InboxMenuDropDown;
