import React from "react";
import "./PILink.scss";

interface PILinkProps {
  href?: string;
  text: string;
}

const PILink: React.FC<PILinkProps> = (props: PILinkProps) => {
  const { href, text } = props;
  return (
    <a href={href} className="pi-link">
      {text}
    </a>
  );
};

export default PILink;
