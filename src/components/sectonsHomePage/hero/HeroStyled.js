import styled from "styled-components";
import heroImage from "../../../images/hero/hero1.jpg";
export const HeroContainer = styled.section`
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${heroImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 200px 0;

  @media screen and (min-width: 320px) and (max-width: 1139px) {
    padding: 118px 20px;
  }
  .hero-title {
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    line-height: 1.61;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--btn-bg-color);
    margin: 0 auto 35px;
  }
  @media screen and (min-width: 1024px) {
    .hero-title {
      font-size: 44px;
      line-height: 1.36;
    }
  }

  .button.accent:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  /* @media screen and (max-width: 767px) and (min-device-pixel-ratio: 2),
    screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    screen and (max-width: 767px) and (-o-min-device-pixel-ratio: 2),
    screen and (max-width: 767px) and (min-resolution: 192dpi),
    screen and (max-width: 767px) and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(../../../images/hero/hero-mobile@2x.jpg);
  }
  @media screen and (min-width: 767px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-width: 767px) and (-o-min-device-pixel-ratio: 2),
    screen and (min-width: 767px) and (min-resolution: 192dpi),
    screen and (min-width: 767px) and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(../../../images/hero/hero-tablet@2x.jpg);
  }
  @media screen and (min-width: 1200px) and (min-device-pixel-ratio: 2),
    screen and (min-width: 1200px) and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-width: 1200px) and (-o-min-device-pixel-ratio: 2),
    screen and (min-width: 1200px) and (min-resolution: 192dpi),
    screen and (min-width: 1200px) and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(../../../images/hero/hero-desktop@2x.jpg);
  } */
`;
