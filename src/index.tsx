import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./assets/globals/global.scss";
import Testcomponents from "./Testcomponents";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "../src/pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="app">
      {/* <Testcomponents /> */}
      <LoginPage />
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
