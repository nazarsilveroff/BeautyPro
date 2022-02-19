import styled from "styled-components";

export const FilterContainer = styled.section`
  padding: 100px 0 40px;

  .filter-container .button {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    color: var(--title-text-color);
    background-color: var(--btn-bg-color);
    border-radius: 4px;
    border-color: transparent;
    padding: 6px 22px;
  }
  .filter-container .button.active {
    background-color: var(--accent-text-color);
    color: var(--btn-bg-color);
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
    color: var(--btn-bg-color);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .filter-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .filter-btn {
      justify-content: center;
    }
  }
  .filter-btn li {
    margin-left: 8px;
    margin-bottom: 12px;
  }
`;
