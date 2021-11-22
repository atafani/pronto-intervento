import React, { useState } from "react";
import Logo from "../../../pronto/assets/images/logo.svg";
import { eInputType } from "../../../pronto/components/enums/eInputType";
import { eSize } from "../../../pronto/components/enums/eSize";
import { eType } from "../../../pronto/components/enums/eType";
import PIButton from "../../../pronto/components/pi-button/PIButton";
import PICheckbox from "../../../pronto/components/pi-checkbox/PICheckbox";
import PIInput from "../../../pronto/components/pi-input/PIInput";
import PILabel from "../../../pronto/components/pi-label/PILabel";
import PILink from "../../../pronto/components/pi-link/PILink";
import Footer from "../../../pronto/components/pi-footer/PIFooter";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e: any) => {
    const value = e.target.value;
    if (e.target.id === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleStayConnected = () => {
    setStayConnected(!stayConnected);
  };

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div className="login-page-container">
      <img src={Logo} alt="Pronto Intervento Logo" className="logo" />
      <form className="login-form " onSubmit={() => console.log("submit")}>
        <div className="login-form-group">
          <PILabel value="Email o Cellulare" />
          <PIInput
            name="email"
            type={eInputType.Text}
            value={email}
            onInput={(e) => handleInput(e)}
            focusable={true}
          />
        </div>

        <div className="login-form-group">
          <PILabel value="Password" />
          <PIInput
            name="password"
            type={
              passwordType === "password"
                ? eInputType.Password
                : eInputType.Text
            }
            value={password}
            onInput={(e) => handleInput(e)}
            icon={isPasswordShown ? faEyeSlash : faEye}
            onIconClick={handleShowPassword}
            focusable={true}
          />
        </div>

        <div className="login-form-group flex-row align-items-center justify-content-center">
          <PICheckbox
            name="resta-connesso"
            size={eSize.Small}
            checked={stayConnected}
            onClick={handleStayConnected}
          />
          <PILabel value="Resta connesso" />
        </div>

        <PIButton
          name="login"
          type={eType.Primary}
          label="Log In"
          size={eSize.Default}
          onClick={() => console.log("dd")}
        />

        <div className="login-form-group login-links flex-row align-items-center justify-content-center">
          <PILink text="Richiedi password" />
          <PILink text="Register" />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
