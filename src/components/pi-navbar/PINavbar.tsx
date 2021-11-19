import React, { useState } from "react";
import "./PINavbar.scss";
import LeftMenuItem from "./components/LeftMenuItem/LeftMenuItem";
import TopMenuItem from "./components/TopMenuItem/TopMenuItem";
import {
  faHandPointRight,
  faThumbsUp,
  faThumbsDown,
  faChartLine,
  faBell,
  faUserCircle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { eSize } from "../enums/eSize";
import PIIcon from "../pi-icon/PIIcon";

const PINavbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const handleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };
  return (
    <div className="pi-navbar-container">
      <div className="pi-navbar-left">
        <div className="pi-navbar-controllers">
          <PIIcon
            icon={isNavbarCollapsed ? faTimes : faBars}
            className="pi-navbar-controller"
            onClick={handleNavbar}
          />
        </div>
        <LeftMenuItem icon={faChartLine} size={eSize.Large} />
        <LeftMenuItem icon={faHandPointRight} size={eSize.Large} />
        <LeftMenuItem icon={faThumbsUp} size={eSize.Large} />
        <LeftMenuItem icon={faThumbsDown} size={eSize.Large} />
      </div>

      <div className={`pi-navbar-top ${isNavbarCollapsed ? "collapsed" : ""}`}>
        <div>
          <TopMenuItem label="Logo" />
        </div>
        <div>
          <TopMenuItem label="Reporte di prestazione" />
          <TopMenuItem label="Fatture" />
        </div>
        <div>
          <TopMenuItem icon={faBell} size={eSize.Default} />
          <TopMenuItem icon={faUserCircle} size={eSize.Large} />
        </div>
      </div>
    </div>
  );
};

export default PINavbar;
