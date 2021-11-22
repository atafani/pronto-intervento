import React from "react";
import "./PILabel.scss";
import PropertyManager from "../../utils/propertyManager";
import { eSize } from "../../components/enums/eSize";

interface PILabelProps {
  value: string;
  size?: eSize;
}

const PILabel: React.FC<PILabelProps> = (props: PILabelProps) => {
  const { value, size } = props;
  const defaultSize = PropertyManager.getValueOrDefault(size, eSize.Default);
  return <label className={`pi-label ${defaultSize}`}>{value}</label>;
};

export default PILabel;
