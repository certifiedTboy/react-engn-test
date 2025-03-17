import { IconContext } from "react-icons";
import { AppIconProps } from "../../interfaces/props-interfaces";

const AppIcon: React.FC<AppIconProps> = ({ children, value }) => {
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
};

export default AppIcon;
