import React from "react";
import { FeaturesContainer } from "./FeaturesStyled";
import pic from "../../../images/features/symbol-defs.svg";

const Features = () => {
  return (
    <FeaturesContainer className="section-features">
      <div className="container features-container">
        <ul className="features list">
          <li>
            <div className="features-icons">
              <svg>
                <use href={pic + "#icon-clean"} />
              </svg>
            </div>
            <h3 className="title">ЧИСТОТА</h3>
            <p className="text">
              Чистота в салоне наша визитная карточка. Ежедневная уборка и
              дезинфекция – залог комфорта для Вас и Ваших клиентов.
            </p>
          </li>
          <li>
            <div className="features-icons">
              <svg>
                <use href={pic + "#icon-charity"} />
              </svg>
            </div>
            <h3 className="title">ЗАБОТА</h3>
            <p className="text">
              Наши администраторы, как добрые феи, окружают теплотой и заботятся
              о Вашем комфорте
            </p>
          </li>
          <li>
            <div className="features-icons">
              <svg>
                <use href={pic + "#icon-location"} />
              </svg>
            </div>
            <h3 className="title">РАСПОЛОЖЕНИЕ</h3>
            <p className="text">
              В самом центре Харькова, в 2 минутах от метро пл. Конституции с
              шикарным видом на «Панораму»
            </p>
          </li>
          <li>
            <div className="features-icons">
              <svg>
                <use href={pic + "#icon-handshake"} />
              </svg>
            </div>
            <h3 className="title">СОТРУДНИЧЕСТВО</h3>
            <p className="text">
              Мы помогаем каждому находить не только новых клиентов, но и
              друзей.
            </p>
          </li>
        </ul>
      </div>
    </FeaturesContainer>
  );
};

export default Features;
