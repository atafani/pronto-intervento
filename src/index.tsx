import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./pronto/assets/globals/global.scss";
import ProntoApp from "./pronto-app/ProntoApp";

ReactDOM.render(
  <React.StrictMode>
      <ProntoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
