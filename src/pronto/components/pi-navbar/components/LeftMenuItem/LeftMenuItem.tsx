import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { eSize } from "../../../enums/eSize";
import PIIcon from "../../../pi-icon/PIIcon";
import "./LeftMenuItem.scss";

interface LeftMenuItemProps {
  icon: IconDefinition;
  href?: string;
  size?: eSize;
}
const LeftMenuItem: React.FC<LeftMenuItemProps> = (
  props: LeftMenuItemProps
) => {
  const { icon, href, size } = props;
  return (
    <a href={href} className="pi-leftmenuitem-container">
      <PIIcon icon={icon} size={size} />
    </a>
  );
};

export default LeftMenuItem;
