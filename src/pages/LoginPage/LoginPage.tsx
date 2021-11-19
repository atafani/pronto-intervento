import React, { useState } from "react";
import Logo from "../../assets/LOGOPRONTO24RETINA-2.png";
import { eInputType } from "../../components/enums/eInputType";
import { eSize } from "../../components/enums/eSize";
import { eType } from "../../components/enums/eType";
import PIButton from "../../components/pi-button/PIButton";
import PICheckbox from "../../components/pi-checkbox/PICheckbox";
import PIInput from "../../components/pi-input/PIInput";
import PILabel from "../../components/pi-label/PILabel";
import PILink from "../../components/pi-link/PILink";
import Footer from "../../components/pi-footer/PIFooter";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

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
      <form className="login-form" onSubmit={() => console.log("submit")}>
        <div className="login-form-group">
          <PILabel value="Email o Cellulare" />
          <PIInput
            name="email"
            type={eInputType.Text}
            value={email}
            onInput={(e) => handleInput(e)}
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
          size={eSize.Large}
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
