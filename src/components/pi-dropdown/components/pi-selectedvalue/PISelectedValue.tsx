import React from "react";
import PIIcon from "../../../pi-icon/PIIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./PISelectedValue.scss";
import { eSize } from "../../../enums/eSize";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

interface PISelectedValueProps {
  value: string;
  onClick: (value: string) => void;
}

const PISelectedValue: React.FC<PISelectedValueProps> = (
  props: PISelectedValueProps
) => {
  const { value, onClick } = props;
  return (
    <Popover placement="top" trigger="hover" matchWidth={true}>
      <PopoverTrigger>
        <div className="pi-selected-value">
          <PIIcon
            icon={faTimes}
            className="pi-selected-icon"
            size={eSize.Small}
            onClick={onClick}
          />
          {value}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>{value}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PISelectedValue;
