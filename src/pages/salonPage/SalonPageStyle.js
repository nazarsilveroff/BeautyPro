import styled from "styled-components";

export const SalonContainer = styled.section`
  .salon-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 70px;
  }
  .btn-back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: var(--btn-bg-color);
    color: var(--accent-text-color);
    border-radius: 50%;
    border: transparent;
    :hover {
      background-color: var(--accent-text-color);
      color: var(--btn-bg-color);
    }
  }
  .icon-back {
    fill: currentColor;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  .sliderWrapper {
    width: 100%;
    height: auto;
    margin: 20px auto;
  }
  .salon-container .button {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    color: var(--title-text-color);
    background-color: var(--btn-bg-color);
    border-radius: 4px;
    border-color: transparent;
    padding: 15px 15px;
    margin-top: 30px;
  }
  .button:hover {
    background-color: var(--accent-text-color);
    color: var(--btn-bg-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
  .button:focus {
    background-color: var(--accent-text-color);
    color: var(--primary-bg-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
