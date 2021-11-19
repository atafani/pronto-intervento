import React, { FormEvent } from "react";
import { eType } from "../enums/eType";
import { eSize } from "../enums/eSize";
import "./PIButton.scss";

interface PIButtonProps {
  name: string;
  label: string;
  type: eType;
  size: eSize;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
}

const PIButton: React.FC<PIButtonProps> = (props: PIButtonProps) => {
  const { name, label, type, size, onClick } = props;
  return (
    <button name={name} onClick={onClick} className={`pi-btn ${type} ${size}`}>
      {label}
    </button>
  );
};

export default PIButton;
