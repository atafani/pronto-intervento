/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PILink from "../pi-link/PILink";
import "./PIFooter.scss";

const PIFooter = () => {
  return (
    <div className="pi-footer-container">
      <ul>
        <li>Creato da Direct24 Web Copyright &copy; 2021</li>
        <li>All Right Reserved</li>
      </ul>
      <ul>
        <li>Company Number: 663757</li>
        <li>
          <a href="mailto:info@pronto-intervento24.it"></a> E-mail:
          info@pronto-intervento24.it
        </li>
      </ul>
      <div className="pi-footer-links">
        <ul>
          <li>
            <PILink href="#" text="Informativa Trattamento Dati Personali" />
          </li>
          <li>
            <PILink href="#" text="Cookie Policy" />
          </li>
          <li>
            <PILink href="#" text="Termini e Condizioni" />
          </li>
          <li>
            <PILink href="#" text="Privacy Policy" />
          </li>
          <li>
            <PILink href="#" text=" Refund Policy" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PIFooter;
