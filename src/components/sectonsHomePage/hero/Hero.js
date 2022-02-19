import React from "react";
import { HeroContainer } from "./HeroStyled";
const Hero = () => {
  return (
    <HeroContainer className="section-hero">
      <div className="container container-hero">
        <h1 className="hero-title">
          Почасовая аренда
          <br /> и абонементы для мастеров красоты
        </h1>
        <a
          target="_blank"
          className="button hero-button accent"
          href="https://n322073.yclients.com/"
          rel="noreferrer"
        >
          Записаться Онлайн
        </a>
      </div>
    </HeroContainer>
  );
};

export default Hero;
