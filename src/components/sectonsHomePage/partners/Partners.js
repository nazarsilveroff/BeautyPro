import React from "react";
import { PartnersContainer } from "./PartnersStyled";
const Partners = () => {
  return (
    <PartnersContainer className="partners">
      <div className="container partners-container">
        <h2 className="section-title">Постоянные клиенты</h2>
        <ul className="patners-list">
          <li>
            <a href="true">
              <svg width={44} height={50}>
                <use href="./images/icons-defs.svg#icon-logo-1" />
              </svg>
            </a>
          </li>
          <li>
            <a href="true">
              <svg width={40} height={52}>
                <use href="./images/icons-defs.svg#icon-logo-2" />
              </svg>
            </a>
          </li>
          <li>
            <a href="true">
              <svg width={41} height={42}>
                <use href="./images/icons-defs.svg#icon-logo-3" />
              </svg>
            </a>
          </li>
          <li>
            <a href="true">
              <svg width={78} height={42}>
                <use href="./images/icons-defs.svg#icon-logo-4" />
              </svg>
            </a>
          </li>
          <li>
            <a href="true">
              <svg width={55} height={47}>
                <use href="./images/icons-defs.svg#icon-logo-5" />
              </svg>
            </a>
          </li>
          <li>
            <a href="true">
              <svg width={89} height={46}>
                <use href="./images/icons-defs.svg#icon-logo-6" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </PartnersContainer>
  );
};

export default Partners;
