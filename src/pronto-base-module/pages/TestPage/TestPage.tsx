import React, { useState } from "react";
import PIButton from "../../../pronto/components/pi-button/PIButton";
import PIInput from "../../../pronto/components/pi-input/PIInput";
import PITextarea from "../../../pronto/components/pi-textarea/PITextarea";
import { eType } from "../../../pronto/components/enums/eType";
import { eSize } from "../../../pronto/components/enums/eSize";
import { eInputType } from "../../../pronto/components/enums/eInputType";
import IDropdownOptions from "../../../pronto/components/interfaces/IDropdownOptions";
import PINavbar from "../../../pronto/components/pi-navbar/PINavbar";
import Footer from "../../../pronto/components/pi-footer/PIFooter";

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

const TestPage = () => {
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
        focusable={true}
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

export default TestPage;
