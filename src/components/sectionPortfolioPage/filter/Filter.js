import React from "react";
import { FilterContainer } from "./FilterStyled";
import { useHistory, useLocation } from "react-router-dom";

const Filter = () => {
  const { push } = useHistory();
  const queryParams = new URLSearchParams(useLocation().search);
  const hendleFilter = (e) => {
    const fltrId = e.target.dataset.filter;
    if (fltrId === "0") {
      queryParams.delete("filterBy");
    } else {
      queryParams.set("filterBy", fltrId);
    }
    push({ search: "?" + queryParams.toString() });
  };

  return (
    <FilterContainer className="filter">
      <div className="container filter-container">
        <ul className="filter-btn list">
          <li>
            <button
              data-filter="0"
              onClick={hendleFilter}
              className={`button ${
                queryParams.has("filterBy") ? "" : "active"
              }`}
            >
              Все
            </button>
          </li>
          <li>
            <button
              data-filter="кабинеты"
              onClick={hendleFilter}
              className={`button ${
                queryParams.get("filterBy") === "кабинеты" ? "active" : ""
              }`}
            >
              кабинеты
            </button>
          </li>
          <li>
            <button
              data-filter="места"
              onClick={hendleFilter}
              className={`button ${
                queryParams.get("filterBy") === "места" ? "active" : ""
              }`}
            >
              места
            </button>
          </li>
          <li>
            <button
              data-filter="фото-зоны"
              onClick={hendleFilter}
              className={`button ${
                queryParams.get("filterBy") === "фото-зоны" ? "active" : ""
              }`}
            >
              фото-зоны
            </button>
          </li>
        </ul>
      </div>
    </FilterContainer>
  );
};

export default Filter;
