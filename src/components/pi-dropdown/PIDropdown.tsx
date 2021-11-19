import React, { useEffect, useRef, useState } from "react";
import { eInputType } from "../enums/eInputType";
import PIInput from "../pi-input/PIInput";
import PISelectedValue from "./components/pi-selectedvalue/PISelectedValue";
import PICheckbox from "../pi-checkbox/PICheckbox";
import PILabel from "../pi-label/PILabel";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./PIDropdown.scss";
import { eSize } from "../enums/eSize";
import IDropdownOptions from "../interfaces/IDropdownOptions";

interface PIDropdownProps {
  name: string;
  searchable?: boolean;
  label: string;
  options: IDropdownOptions[];
  multiple?: boolean;
}

const PIDropdown: React.FC<PIDropdownProps> = (props: PIDropdownProps) => {
  const { name, searchable, label, options, multiple } = props;
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState<IDropdownOptions[]>([]);
  const [searchedOptions, setSearchedOptions] = useState(options);
  const [isSearchable, setIsSearchable] = useState(false);
  const [icon, setIcon] = useState(faAngleUp);

  const handleIconClick = () => {
    icon === faAngleUp ? setIcon(faAngleDown) : setIcon(faAngleUp);
    setIsDropdownShown(!isDropdownShown);
    searchable && setIsSearchable(!isSearchable);
  };

  const handleClick = () => {
    if (!isDropdownShown) {
      handleIconClick();
    }
  };

  const handleSearch = (e: any) => {
    !multiple && setDropdownValue([]);
    setSearchValue(e.target.value);
    setSearchedOptions(options?.filter((o) => o.text.includes(e.target.value)));
  };

  const handleSelect = (option: any) => {
    let val: IDropdownOptions[] = [...dropdownValue];
    if (multiple) {
      if (val.findIndex((el: IDropdownOptions) => el === option) < 0) {
        val.push(option);
      } else {
        handleRemoveValue(option);
        return;
      }
    } else {
      val = [{ ...option }];
    }
    setDropdownValue(val);
    if (!multiple) {
      setSearchValue(option.text);
      handleIconClick();
    }
  };

  const handleRemoveValue = (selectedOption: IDropdownOptions) => {
    let temp: IDropdownOptions[] = [...dropdownValue];
    temp = temp.filter((o: IDropdownOptions) => o !== selectedOption);
    setDropdownValue(temp);
  };

  const renderOptions = () =>
    searchedOptions?.map((option) => {
      return (
        <div
          key={option.value}
          onClick={() => handleSelect(option)}
          className="pi-dropdown-option"
        >
          {multiple && (
            <PICheckbox
              name={option.value}
              onClick={() => handleSelect(option)}
              checked={
                dropdownValue.findIndex((o) => o.value === option.value) < 0
                  ? false
                  : true
              }
              size={eSize.Small}
            />
          )}
          <PILabel value={option.text} />
        </div>
      );
    });

  const renderSelectedValues = () =>
    dropdownValue.map((option: any, i: number) => {
      return (
        <PISelectedValue
          value={option.text}
          onClick={() => handleRemoveValue(option)}
        />
      );
    });

  return (
    <div className="pi-dropdown-container" onClick={handleClick}>
      <div className="pi-dropdown-selected">
        {multiple && renderSelectedValues()}
      </div>
      <div className="pi-dropdown-input">
        <PIInput
          name={name}
          type={eInputType.Text}
          size={eSize.Default}
          placeholder={label}
          value={searchValue}
          readonly={!isSearchable}
          focusable={false}
          onInput={handleSearch}
          border={false}
          icon={icon}
          onIconClick={handleIconClick}
        />
      </div>

      <div className={`pi-dropdown ${isDropdownShown ? "show" : ""}`}>
        {renderOptions()}
      </div>
    </div>
  );
};

export default PIDropdown;
