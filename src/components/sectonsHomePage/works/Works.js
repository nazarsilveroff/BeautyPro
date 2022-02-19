import React from "react";
import { WorksContainer } from "./WorksStyled";

import { Link } from "react-router-dom";
const Works = () => {
  return (
    <WorksContainer className="section-works">
      <div className="container container-works">
        <h2 className="section-title">Наш Co-working это</h2>
        <ul className="work-list">
          <li className="work-item">
            <Link
              to="/portfolio?filterBy=кабинеты"
              href="true"
              className="work-link"
            >
              <div className="work-image work-image1"></div>
              <div className="work-content">
                <h3 className="work-title">Кабинеты для косметологов</h3>
              </div>
            </Link>
          </li>
          <li className="work-item">
            <Link
              to="/portfolio?filterBy=места"
              href="true"
              className="work-link"
            >
              <div className="work-image work-image2"></div>
              <div className="work-content">
                <h3 className="work-title">Места с зеркалами</h3>
              </div>
            </Link>
          </li>
          <li className="work-item">
            <Link
              to="/portfolio?filterBy=фото-зоны"
              href="true"
              className="work-link"
            >
              <div className="work-image work-image3"></div>
              <div className="work-content">
                <h3 className="work-title">Зал для мастер-классов</h3>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </WorksContainer>
  );
};

export default Works;
