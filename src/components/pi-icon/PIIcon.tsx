import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PIIcon.scss";
import { eSize } from "../enums/eSize";

interface PIIconProps {
  icon?: any;
  showPointer?: boolean;
  size?: eSize;
  className?: string;
  onClick?: (p?: any) => void;
}

const PIIcon: React.FC<PIIconProps> = (props: PIIconProps) => {
  const { icon, className, size, onClick } = props;
  return (
    <FontAwesomeIcon
      className={`pi-icon ${className} ${size}`}
      onClick={onClick}
      icon={icon}
    />
  );
};

export default PIIcon;
