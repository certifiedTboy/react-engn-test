import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

interface ListItem {
  name: string;
  url: string;
}

const SidekickWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0; /* Keep it aligned to the right */
  pointer-events: none;
  z-index: 9999;
  display: flex;
  justify-content: flex-end; /* Pushes content to the right */
`;

const SidekickBody = styled(motion.div)<{ width: number }>`
  position: relative;
  z-index: 1;
  pointer-events: all;
  background-color: #fff;
  padding: 40px 60px 30px 30px;
  height: 100%;
  width: ${({ width }) => `${width}px`}; /* Ensure it has a fixed width */
  box-sizing: border-box;
`;

const MenuHandler = styled(motion.button)`
  border: none;
  background: transparent;
  position: absolute;
  top: 10px;
  left: -50px; /* Adjusted to keep it visible when closed */
  outline: none;
`;

const sidekickBodyStyles = {
  active: {
    x: 0, // Fully visible
  },
  inactive: {
    x: "100%", // Moves completely off-screen to the right
  },
};

const SideBarList: React.FC<{ data: ListItem[] }> = ({ data }) => (
  <>
    {data.map((item, i) => (
      <div key={i}>{item.name}</div>
    ))}
  </>
);

const MessageDrawer: React.FC<{
  overlayColor?: string;
  width?: number;
  data: ListItem[];
}> = ({ overlayColor = "transparent", width = 200, data }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isActive ? "active" : "inactive");
  }, [isActive, controls]);

  return (
    <SidekickWrapper>
      <SidekickBody
        width={width}
        animate={controls}
        variants={sidekickBodyStyles}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <MenuHandler onTap={() => setIsActive((s) => !s)}>
          {isActive ? "Close" : "Open"}
        </MenuHandler>
        <SideBarList data={data} />
      </SidekickBody>
    </SidekickWrapper>
  );
};

export default MessageDrawer;
