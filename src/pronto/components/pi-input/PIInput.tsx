import React, { useState } from "react";
import { eInputType } from "../enums/eInputType";
import { eSize } from "../enums/eSize";
import PropertyManager from "../../utils/propertyManager";
import PIIcon from "../pi-icon/PIIcon";
import "./PIInput.scss";

interface PIInputProps {
  name: string;
  placeholder?: string;
  type: eInputType;
  size?: eSize;
  value: any;
  minRange?: number;
  maxRange?: number;
  icon?: any;
  readonly?: boolean;
  focusable?: boolean;
  autocomplete?: boolean;
  border?: boolean;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onIconClick?: () => void;
}

const PIInput: React.FC<PIInputProps> = (props: PIInputProps) => {
  const {
    name,
    type,
    value,
    minRange,
    maxRange,
    size,
    icon,
    border,
    readonly,
    focusable,
    placeholder,
    autocomplete,
    onInput,
    onClick,
    onIconClick,
  } = props;
  const defaultSize = PropertyManager.getValueOrDefault(size, eSize.Default);
  const defaultBorder = PropertyManager.getValueOrDefault(border, true);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`pi-input-container ${isFocused ? "focused" : ""} ${
        defaultBorder ? "" : "none"
      }`}
    >
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        min={minRange}
        max={maxRange}
        readOnly={readonly}
        autoComplete={autocomplete ? "on" : "off"}
        onInput={onInput}
        onFocus={() => focusable && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={onClick}
        className={`pi-input 
          ${defaultSize} 
          `}
      />
      {icon && (
        <PIIcon
          onClick={onIconClick}
          icon={icon}
          className="pi-input-icon"
          size={size}
        />
      )}
    </div>
  );
};

export default PIInput;
