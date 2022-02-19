import styled from "styled-components";
export const PartnersContainer = styled.section`
  .partners-container .section-title {
    padding-top: 94px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    .partners-container .section-title {
      padding-top: 60px;
    }
  }
  .partners-container .patners-list {
    padding-bottom: 94px;
  }
  @media (min-width: 320px) and (max-width: 768px) {
    .partners-container .patners-list {
      padding-bottom: 60px;
    }
  }
  .patners-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: -30px;
    margin-bottom: -30px;
  }
  .patners-list li {
    max-width: 226px;
    flex-basis: calc(100% / 3);
    margin-bottom: 30px;
    margin-left: 30px;
  }
  .patners-list a {
    height: 90px;
    border: 1px solid;
    border-color: #afb1b8;
    border-radius: 4px;
    fill: #afb1b8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .patners-list a:hover {
    border-color: var(--accent-text-color);
    fill: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .patners-list a:focus {
    border-color: var(--accent-text-color);
    fill: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: 480px) and (max-width: 1199px) {
    .partners-container {
      max-width: 768px;
    }
  }
  @media (min-width: 1200px) {
    .patners-list {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 0;
    }
    .patners-list li {
      margin: 0;
      max-width: 170px;
    }
  }
`;
