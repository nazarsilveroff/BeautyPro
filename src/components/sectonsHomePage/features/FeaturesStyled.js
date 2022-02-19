import styled from "styled-components";
export const FeaturesContainer = styled.section`
  padding: 60px 0;

  .features li:not(:last-child) {
    margin-bottom: 30px;
  }
  .features .title {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.14;
    text-transform: uppercase;
    color: var(--title-text-color);
    margin-bottom: 10px;
    letter-spacing: 0.03em;
    text-align: center;
  }
  @media (min-width: 768px) {
    .features .title {
      text-align: center;
    }
  }
  .features .text {
    text-align: justify;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.71;
    color: var(--primary-text-color);
  }
  .features-icons {
    background: var(--btn-bg-color);
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 15px;
  }
  .features-icons svg {
    width: 100px;
    fill: var(--accent-text-color);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .features {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-left: -30px;
    }
    .features li {
      max-width: 354px;
      flex-basis: calc(100% / 2);
      margin-left: 30px;
    }
  }
  @media (min-width: 1024px) {
    .features {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-left: -30px;
    }
    .features li {
      width: 270px;
      margin-left: 30px;
    }
  }
`;
