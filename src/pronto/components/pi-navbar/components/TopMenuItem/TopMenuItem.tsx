import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { eSize } from "../../../enums/eSize";
import PIIcon from "../../../pi-icon/PIIcon";
import "./TopMenuItem.scss";

interface TopMenuItemProps {
  icon?: IconDefinition;
  href?: string;
  label?: string;
  size?: eSize;
}
const TopMenuItem: React.FC<TopMenuItemProps> = (props: TopMenuItemProps) => {
  const { icon, href, label, size } = props;
  return (
    <a href={href} className="pi-topmenuitem-container">
      <PIIcon icon={icon} size={size} />
      {label}
    </a>
  );
};

export default TopMenuItem;
