import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--secondary-bg-color);
  padding: 60px 0;

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.03em;
    text-align: center;
    text-transform: uppercase;
    color: var(--btn-bg-color);
    margin-bottom: 20px;
  }
  @media (min-width: 1100px) {
    footer h2 {
      text-align: start;
    }
  }
  .footer-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
  .footer-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  .logo {
    color: var(--title-text-color);
    font-family: Raleway;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.2;
    display: inline-block;
    letter-spacing: 0.03em;
    margin-right: 93px;
  }
  @media (max-width: 1024px) {
    .logo {
      font-size: 24px;
      line-height: 1.16;
      margin-right: 88px;
    }
  }
  .logo-span {
    color: var(--accent-text-color);
  }
  .footer-nav .logo {
    color: var(--btn-bg-color);
    margin-bottom: 20px;
    margin-right: 0;
  }
  address {
    margin-bottom: 9px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.03em;
    color: var(--btn-bg-color);
  }
  .footer-auth-nav .link {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.71;
    color: var(--secondary-text-color);
    text-decoration: none;
  }
  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }
  .subscribe .icon-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 206px;
  }
  .subscribe .icon-list a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50px;
    fill: var(--btn-bg-color);
    background: rgba(255, 255, 255, 0.1);
  }
  .subscribe .icon-list a:hover {
    background-color: var(--accent-text-color);
    fill: var(--btn-bg-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .subscribe .icon-list a:focus {
    background-color: var(--accent-text-color);
    fill: var(--btn-bg-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mailing {
    text-align: center;
  }
  .mailing input {
    width: 100%;
    padding: 15px 0 15px 16px;
    font-size: 16px;
    line-height: 1.25;
    background: #2f303a;
    color: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.3);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .mailing-link {
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px 29px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.87;
    letter-spacing: 0.06em;
    color: var(--btn-bg-color);
    background-color: var(--accent-text-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: transparent;
  }
  .mailing-link svg {
    fill: currentColor;
    margin-left: 10px;
  }
  @media (min-width: 767px) and (max-width: 1100px) {
    .footer-container {
      display: flex;
      flex-direction: row;
    }
    .nav-mailing-wrapper {
      display: flex;
      justify-content: space-around;
    }
    .mailing input {
      max-width: 450px;
    }
  }
  @media (min-width: 1100px) {
    .footer-container {
      display: flex;
      flex-direction: row;
    }
    .nav-mailing-wrapper {
      display: flex;
      flex-direction: row;
    }
    .footer-nav {
      margin-bottom: 0;
      margin-right: 70px;
      align-items: flex-start;
    }
    .subscribe {
      margin-bottom: 0;
      margin-right: 90px;
      align-items: center;
    }
    .mailing {
      max-width: 570px;
    }
    .mailing label .box-wrapper {
      display: flex;
    }
    .mailing input {
      width: 358px;
      margin-right: 12px;
      margin-bottom: 0;
    }
    /* .mailing button {
      margin: 0;
    } */
  }
`;
