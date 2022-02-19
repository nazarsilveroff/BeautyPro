import styled from "styled-components";

export const HeaderContainer = styled.header`
  /* position: fixed; */
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-container nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .nav__btn {
    border: none;
    background: transparent;
  }
  .nav__btn:focus {
    fill: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .site-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .site-nav li:not(:last-child) {
    margin-right: 50px;
  }
  .site-nav .link.current {
    color: var(--accent-text-color);
    position: relative;
  }
  .site-nav .link.current::before {
    content: "";
    width: 100%;
    height: 4px;
    position: absolute;
    background: #2196f3;
    border-radius: 2px;
    bottom: 0;
  }
  .site-nav .link {
    color: var(--title-text-color);
    text-decoration: none;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
  }
  .site-nav .link:hover {
    color: var(--accent-text-color);
    fill: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .site-nav .link:focus {
    color: var(--accent-text-color);
    fill: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .auth-nav .link {
    display: flex;
    align-items: center;
    color: var(--primary-text-color);
    letter-spacing: 0.02em;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.17;
  }
  .auth-nav .link svg {
    margin-right: 10px;
    fill: currentcolor;
  }
  @media (max-width: 1023px) {
    .auth-nav .link svg {
      max-width: 14px;
      max-height: 14px;
      margin-right: 8px;
    }
  }
  @media (max-width: 1023px) {
    .auth-nav .link {
      font-size: 12px;
    }
  }
  .auth-nav .link:hover {
    color: var(--accent-text-color);
    fill: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .auth-nav .link:focus {
    color: var(--accent-text-color);
    fill: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: 320px) and (max-width: 768px) {
    .header-container {
      height: 60px;
    }
    .nav__btn {
      display: flex;
    }
    .auth-nav,
    .site-nav {
      display: none;
    }
  }
  @media (min-width: 767px) and (max-width: 1040px) {
    nav .site-nav a {
      padding: 32px 0;
      display: inline-block;
    }
    nav .auth-nav a {
      padding: 32px 0;
      display: inline-block;
    }
    .nav__btn {
      display: none;
    }
    .site-nav {
      display: flex;
    }
    .auth-nav {
      display: flex;
      flex-direction: column;
    }
    .auth-nav li:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  @media (min-width: 1040px) {
    nav .site-nav a {
      padding: 32px 0;
      display: inline-block;
    }
    nav .auth-nav a {
      padding: 32px 0;
      display: inline-block;
    }
    .nav__btn {
      display: none;
    }
    .auth-nav {
      display: flex;
      align-items: center;
      flex-direction: row;
    }
    .auth-nav li {
      display: flex;
      align-items: center;
      margin-bottom: 0px;
    }
    .auth-nav li:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 50px;
    }
  }
`;
