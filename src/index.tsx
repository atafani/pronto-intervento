import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./pronto/assets/globals/global.scss";
import ProntoApp from "./pronto-app/ProntoApp";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ProntoApp />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
