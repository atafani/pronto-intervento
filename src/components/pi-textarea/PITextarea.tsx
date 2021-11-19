import React from "react";
import { eSize } from "../enums/eSize";
import "./PITextarea.scss";

interface PITextareaProps {
  name: string;
  value: any;
  rows: number;
  cols: number;
  size: eSize;
  onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

const PITextarea: React.FC<PITextareaProps> = (props: PITextareaProps) => {
  const { name, value, rows, cols, size, onInput } = props;
  return (
    <textarea
      name={name}
      id={name}
      value={value}
      cols={cols}
      rows={rows}
      onInput={onInput}
      className={`pi-textarea ${size}`}
    />
  );
};

export default PITextarea;
