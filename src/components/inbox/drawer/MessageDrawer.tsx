import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { MessageOptionContext } from "../../../context/toggle-inbox-context";
import { MessageDrawerProps } from "../../../interfaces/props-interfaces";
import MessageCard from "../messages/MessageCard";
import SearchMessageInput from "../search-message/SearchMessgeInput";
import AppIcon from "../../common/AppIcon";
import { generateList } from "../../../helpers/generateList";

const SidekickWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  pointer-events: none;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
`;

const SidekickBody = styled(motion.div)<{ width: number }>`
  position: relative;
  z-index: 1;
  pointer-events: all;
  background-color: #fff;
  padding: 40px 10px 30px 10px;
  height: 100%;
  width: ${({ width }) => `${width}px`};
  box-sizing: border-box;
`;

const MenuHandler = styled(motion.button)`
  border: none;
  background: transparent;
  position: absolute;
  top: 10px;
  left: -50px;
  outline: none;
  cursor: pointer;
  margin-left: 60px;
`;

const MessageContainer = styled.div`
  overflow-x: scroll;
  height: 100%;
  padding-bottom: 50px;
`;

const sidekickBodyStyles = {
  active: {
    x: 0, // Fully visible
  },
  inactive: {
    x: "100%", // Moves completely off-screen to the right
  },
};

const MessageDrawer: React.FC<MessageDrawerProps> = ({ width }) => {
  const { showMobileInbox, toggleMobileInbox } =
    useContext(MessageOptionContext);

  const controls = useAnimation();

  useEffect(() => {
    controls.start(showMobileInbox ? "active" : "inactive");
  }, [showMobileInbox, controls]);

  return (
    <div className="block sm:hidden">
      <SidekickWrapper className="drop-shadow-md">
        <SidekickBody
          drag="x"
          dragElastic={0.1}
          dragConstraints={{
            left: -width!,
            right: 0,
          }}
          dragMomentum={false}
          onDragEnd={(_event, info) => {
            const isDraggingLeft = info.offset.x < 0;
            const multiplier = isDraggingLeft ? 1 / 4 : 2 / 3;
            const threshold = width! * multiplier;

            if (Math.abs(info.point.x) > threshold && showMobileInbox) {
              toggleMobileInbox();
            } else {
              controls.start(showMobileInbox ? "active" : "inactive");
            }
          }}
          width={width || 300}
          animate={controls}
          variants={sidekickBodyStyles}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          <MenuHandler onTap={toggleMobileInbox}>
            {showMobileInbox && (
              <AppIcon value={{ size: "1.8em", color: "#333" }}>
                <IoIosClose />
              </AppIcon>
            )}
          </MenuHandler>

          <div className="sticky w-full">
            <SearchMessageInput />
          </div>
          <MessageContainer>
            {generateList(20).map((item) => {
              return <MessageCard key={item} />;
            })}
          </MessageContainer>
        </SidekickBody>
      </SidekickWrapper>
    </div>
  );
};

export default MessageDrawer;
