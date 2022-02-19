import React from "react";
import { MembersContainer } from "./MembersStyled";

import staff1 from "../../../images/team/mob-staff-1.jpg";
import staff2 from "../../../images/team/mob-staff-2.jpg";
import staff3 from "../../../images/team/mob-staff-3.jpg";
import staff4 from "../../../images/team/mob-staff-4.jpg";
import IconList from "./iconList/IconList";

const Members = () => {
  return (
    <MembersContainer>
      <div className="container members-container">
        <h2 className="section-title">Наша команда</h2>
        <ul className="member list">
          <li className="member-card">
            <img src={staff1} alt="Игорь Демьяненко" />

            <h3 className="title">Игорь Демьяненко</h3>
            <p className="text" lang="en">
              Product Designer
            </p>
            <div className="soc-icons">
              <IconList />
            </div>
          </li>
          <li className="member-card">
            <img src={staff2} alt="Игорь Демьяненко" />

            <h3 className="title">Ольга Репина</h3>
            <p className="text" lang="en">
              Frontend Developer
            </p>
            <div className="soc-icons">
              <IconList />
            </div>
          </li>
          <li className="member-card">
            <img src={staff3} alt="Игорь Демьяненко" />
            <h3 className="title">Николай Тарасов</h3>
            <p className="text" lang="en">
              Marketing
            </p>
            <div className="soc-icons">
              <IconList />
            </div>
          </li>
          <li className="member-card">
            <img src={staff4} alt="Михаил Ермаков" />

            <h3 className="title">Михаил Ермаков</h3>
            <p className="text" lang="en">
              UI Designer
            </p>
            <div className="soc-icons">
              <IconList />
            </div>
          </li>
        </ul>
      </div>
    </MembersContainer>
  );
};

export default Members;
