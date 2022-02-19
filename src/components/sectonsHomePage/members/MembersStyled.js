import styled from "styled-components";
export const MembersContainer = styled.section`
  background-color: var(--btn-bg-color);
  padding: 94px 0;

  @media (min-width: 320px) and (max-width: 768px) {
    padding: 60px 0;
  }
  .member {
    margin-left: -30px;
    margin-bottom: -30px;
  }
  .member-card {
    margin-bottom: 30px;
    margin-left: 30px;
    max-width: 450px;
    background: var(--primary-bg-color);
    border-radius: 0px 0px 4px 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
  .member-card img {
    width: 100%;
    display: block;
  }
  .member-card .title {
    margin-top: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.18;
    text-align: center;
    color: var(--title-text-color);
    margin-bottom: 10px;
  }
  .member-card .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.18;
    text-align: center;
    color: var(--primary-text-color);
  }
  .soc-icons {
    margin-top: 16px;
    padding: 0 30px 30px 30px;
    display: flex;
    justify-content: center;
  }
  .icon-list {
    max-width: 206px;
    display: flex;
  }
  .icon-list a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50px;
    fill: var(--socialIkon-color);
  }
  .icon-list a:hover {
    background-color: var(--accent-text-color);
    fill: var(--btn-bg-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .icon-list a:focus {
    background-color: var(--accent-text-color);
    fill: var(--btn-bg-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: 320px) and (max-width: 766px) {
    .member {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .member {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .member-card {
      max-width: 354px;
      flex-basis: calc(100% / 2);
    }
  }
  @media (min-width: 1024px) {
    .member {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-left: -30px;
    }
    .member .member-card {
      margin-left: 30px;
    }
  }
`;
