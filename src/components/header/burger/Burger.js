import React from "react";
import { NavLink, Link } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import { BurgerWrapper } from "./BurgerStyled";
import sprite from "../../../images/icons-defs.svg";

const Burger = ({ closeMenu }) => {
  return (
    <BurgerWrapper className="container">
      <div className="header-menu">
        <Link onClick={closeMenu} to="/" className="logo" lang="en">
          <span className="logo-span">Beauty</span>Pro
        </Link>
        <button onClick={closeMenu} className="nav__btn">
          <svg className="img-button" width={24} height={16}>
            <use xlinkHref={sprite + "#icon-close-btn"} />
          </svg>
        </button>
      </div>
      <ul className="nav-list">
        {mainRoutes.map((route) =>
          route.isExternal ? (
            <li onClick={closeMenu} className="nav-item" key={route.path}>
              <a
                target="_blank"
                className="nav-link"
                href={route.path}
                rel="noreferrer"
              >
                {route.name}
              </a>
            </li>
          ) : (
            <li className="nav-item" key={route.path}>
              <NavLink
                onClick={closeMenu}
                to={{
                  pathname: route.path,
                }}
                className="nav-link"
                activeclassname="current"
                exact={route.exact}
              >
                {route.name}
              </NavLink>
            </li>
          )
        )}
      </ul>
      <ul className="contacts-list">
        <li className="contacts-item">
          <a className="contacts-link" href="tel:+380937616565">
            <svg className="contacts-icon">
              <use xlinkHref={sprite + "#icon-svg-phone"} />
            </svg>
            +38 093 761 65 65
          </a>
        </li>
        <li className="contacts-item">
          <a className="contacts-link" href="tel:+380999199981">
            <svg className="contacts-icon">
              <use xlinkHref={sprite + "#icon-svg-phone"} />
            </svg>
            +38 099 919 99 81
          </a>
        </li>
      </ul>
      <ul className="social-list">
        <li className="social-item">
          <a
            target="_blank"
            className="social-link"
            href="https://www.instagram.com/beautypro.coworking/?hl=ru"
            rel="noreferrer"
          >
            <svg className="social-icon" width={20} height={20}>
              <use xlinkHref={sprite + "#icon-instagram"} />
            </svg>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="social-link"
            href="https://www.facebook.com/beautypro.coworking"
            rel="noreferrer"
          >
            <svg className="social-icon" width={20} height={20}>
              <use xlinkHref={sprite + "#icon-facebook"} />
            </svg>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="social-link"
            href="https://www.google.com/maps/place/%F0%9F%92%96BEAUTY+PROFESSIONAL+studio+%26+coworking/@49.9888162,36.230094,17z/data=!3m1!4b1!4m5!3m4!1s0x4127a115fc1eabbf:0xaa2d7a14e569837a!8m2!3d49.9888181!4d36.2323432"
            rel="noreferrer"
          >
            <svg className="social-icon" width={20} height={20}>
              <use xlinkHref={sprite + "#icon-google"} />
            </svg>
          </a>
        </li>
      </ul>
    </BurgerWrapper>
  );
};

export default Burger;
