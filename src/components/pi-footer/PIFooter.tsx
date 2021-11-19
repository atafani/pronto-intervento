import React from "react";
import "./PIFooter.scss";

const PIFooter = () => {
  return (
    <div className="pi-footer-container">
      <p>Creato da Direct24 Web Copyright &copy; 2021 | All Right Reserved</p>
      <p>
        Company Number: 663757 |
        <a href="mailto:info@pronto-intervento24.it"></a>E-mail:
        info@pronto-intervento24.it
      </p>
      <div className="pi-footer-links">
        <ul>
          <li>
            <a href="#" className="pi-footer-link">
              Informativa Trattamento Dati Personali
            </a>
          </li>
          <li>
            <a href="#" className="pi-footer-link">
              {" "}
              Cookie Policy
            </a>
          </li>
          <li>
            <a href="#" className="pi-footer-link">
              Termini e Condizioni
            </a>
          </li>
          <li>
            <a href="#" className="pi-footer-link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="pi-footer-link">
              Refund Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PIFooter;
