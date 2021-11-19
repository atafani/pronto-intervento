import React from "react";
import "./PICheckbox.scss";
import PIIcon from "../pi-icon/PIIcon";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { eSize } from "../enums/eSize";

interface PICheckboxProps {
  name: string;
  checked?: boolean;
  onClick?: () => void;
  size: eSize;
}
const PICheckbox: React.FC<PICheckboxProps> = (props: PICheckboxProps) => {
  const { checked, name, size, onClick } = props;
  return (
    <div className="pi-checkbox-container">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        className="pi-checkbox"
      />
      <div className={`pi-custom-checkbox ${size}`} onClick={onClick}>
        {checked && <PIIcon icon={faCheck} size={eSize.Small} />}
      </div>
    </div>
  );
};

export default PICheckbox;
