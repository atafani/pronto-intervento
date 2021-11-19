import React, { useState } from "react";
import PIButton from "./components/pi-button/PIButton";
import PIInput from "./components/pi-input/PIInput";
import PIDropdown from "./components/pi-dropdown/PIDropdown";
import PITextarea from "./components/pi-textarea/PITextarea";
import { eType } from "./components/enums/eType";
import { eSize } from "./components/enums/eSize";
import { eInputType } from "./components/enums/eInputType";
import IDropdownOptions from "./components/interfaces/IDropdownOptions";
import PINavbar from "./components/pi-navbar/PINavbar";
import Footer from "./components/pi-footer/PIFooter";

const OPTIONS: IDropdownOptions[] = [
  {
    value: 1,
    text: "Blu",
  },
  {
    value: 2,
    text: "Kuqe",
  },
  {
    value: 3,
    text: "Verdhe",
  },
  {
    value: 4,
    text: "Lejla",
  },
];

const Testcomponents = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <PINavbar />
      <PIButton
        name="login"
        type={eType.Primary}
        size={eSize.Small}
        label="Login"
        onClick={() => console.log("clicked")}
      />
      <br />
      <br />
      <br />
      <PIInput
        name="name"
        type={eInputType.Text}
        value={name}
        size={eSize.Small}
        onInput={(e: any) => setName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <PITextarea
        name="message"
        value={message}
        cols={35}
        rows={6}
        size={eSize.Small}
        onInput={(e: any) => setMessage(e.target.value)}
      />
      <br />
      <br />
      <br />
      {/* <PIDropdown
        name="search"
        label="Select an option"
        searchable={true}
        options={OPTIONS}
        multiple={true}
      /> */}
      <Footer />
    </div>
  );
};

export default Testcomponents;
