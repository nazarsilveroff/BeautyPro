import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";
import { HeaderContainer } from "./HederStyled";
import sprite from "../../images/icons-defs.svg";
import Burger from "./burger/Burger";
const Header = () => {
  const [open, setOpen] = useState(false);
  const hendleBurger = (e) => {
    setOpen(!open);
  };
  return (
    <HeaderContainer>
      <div className="container header-container">
        <nav>
          {!open && (
            <Link to="/" className="logo" lang="en">
              <span className="logo-span">Beauty</span>Pro
            </Link>
          )}
          <ul className="site-nav list ">
            {mainRoutes.map((route) =>
              route.isExternal ? (
                <li key={route.path}>
                  <a
                    target="_blank"
                    className="link"
                    href={route.path}
                    rel="noreferrer"
                  >
                    {route.name}
                  </a>
                </li>
              ) : (
                <li key={route.path}>
                  <NavLink
                    to={{
                      pathname: route.path,
                    }}
                    className="link "
                    activeclassname="current"
                    exact={route.exact}
                  >
                    {route.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
        <ul className="auth-nav list">
          <li>
            <a className="link" href="tel:+380937616565">
              <svg width={10} height={16} className="phone">
                <use xlinkHref={sprite + "#icon-svg-phone"} />
              </svg>
              +38 093 761 65 65
            </a>
          </li>
          <li>
            <a className="link" href="tel:+380999199981">
              <svg width={10} height={16} className="phone">
                <use xlinkHref={sprite + "#icon-svg-phone"} />
              </svg>
              +38 099 919 99 81
            </a>
          </li>
        </ul>
        {!open && (
          <button onClick={hendleBurger} className="nav__btn">
            <svg className="img-button" width={24} height={16}>
              <use xlinkHref={sprite + "#icon-burger"} />
            </svg>
          </button>
        )}

        {open && <Burger closeMenu={hendleBurger} />}
      </div>
    </HeaderContainer>
  );
};

export default withRouter(Header);
