import styled from "styled-components";
export const BurgerWrapper = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  position: absolute;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-bg-color);

  width: 100%;
  height: 100%;
  padding-top: 6%;
  transition: 1s; /*Скорость перехода состояния элемента*/
  animation: show 1s 1; /* Указываем название анимации, её время и количество повторов*/
  animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
  @keyframes show {
    100% {
      top: 50%;
    }
  }
  .header-menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .nav-list {
    margin-top: 10%;
    width: 100%;
  }
  .nav-item:last-child,
  .nav-item:first-child {
    display: none;
  }
  .nav-item {
    /* border-bottom: 3px solid var(--accent-text-color); */
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    background-color: var(--btn-bg-color);
    border-radius: 20px;
    color: var(--accent-text-color);
    text-decoration: none;
    letter-spacing: 0.02em;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.2;
  }

  .nav-link:hover {
    font-size: 24px;
    color: var(--btn-bg-color);
    transform: scale(104%);
    background-color: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .contacts-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    margin: 10% auto;
  }
  .contacts-item:not(:last-child) {
    margin-bottom: 10px;
  }
  .contacts-link {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: var(--btn-bg-color);
    color: var(--accent-text-color);
    text-decoration: none;
    letter-spacing: 0.02em;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    height: 40px;
  }

  .contacts-link:focus,
  .contacts-link:hover {
    transform: scale(104%);
    color: var(--btn-bg-color);
    background-color: var(--accent-text-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .contacts-icon {
    fill: currentColor;
    width: 30px;
    height: 30px;
  }
  .social-list {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    margin: 0 auto;
    justify-content: space-around;
    margin-bottom: 10%;
  }
  .social-item {
  }
  .social-link {
    color: var(--accent-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--btn-bg-color);
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
  .social-link:focus,
  .social-link:hover {
    transform: scale(104%);
    color: var(--btn-bg-color);
    background-color: var(--accent-text-color);
    fill: var(--btn-bg-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .social-icon {
    fill: currentColor;
    width: 40px;
    height: 40px;
  }
`;
