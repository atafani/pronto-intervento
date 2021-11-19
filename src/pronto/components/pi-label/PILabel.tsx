import React from "react";
import "./PILabel.scss";

interface PILabelProps {
  value: string;
}

const PILabel: React.FC<PILabelProps> = (props: PILabelProps) => {
  const { value } = props;
  return <label className="pi-label">{value}</label>;
};

export default PILabel;
