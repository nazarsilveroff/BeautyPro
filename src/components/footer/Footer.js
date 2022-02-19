import React from "react";
import { FooterContainer } from "./FooterStyled";
import sprite from "../../images/icons-defs.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="container footer-container">
        <div className="nav-mailing-wrapper">
          <div className="footer-nav">
            <Link to="/" className="logo" lang="en">
              <span className="logo-span">Beauty</span>Pro
            </Link>
            <address>г. Харьков, пл.Конституции 1, ТЦ “Бзана”, 2 этаж</address>
            <ul className="footer-auth-nav list">
              <li>
                <a className="link" href="tel:+380937616565">
                  +38 093 761 65 65 (Вайбер\Телеграм)
                </a>
              </li>
              {/* <li>
                <a className="link" href="tel:+380999199981">
                  +38 099 919 99 81
                </a>
              </li> */}
            </ul>
          </div>
          <div className="subscribe">
            <h2 className="subscribe-title">присоединяйтесь</h2>
            <ul className="icon-list">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/beautypro.coworking/?hl=ru"
                  rel="noreferrer"
                >
                  <svg width={20} height={20}>
                    <use xlinkHref={sprite + "#icon-instagram"} />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/beautypro.coworking"
                  rel="noreferrer"
                >
                  <svg width={20} height={20}>
                    <use xlinkHref={sprite + "#icon-facebook"} />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/%F0%9F%92%96BEAUTY+PROFESSIONAL+studio+%26+coworking/@49.9888162,36.230094,17z/data=!3m1!4b1!4m5!3m4!1s0x4127a115fc1eabbf:0xaa2d7a14e569837a!8m2!3d49.9888181!4d36.2323432"
                  rel="noreferrer"
                >
                  <svg width={20} height={20}>
                    <use xlinkHref={sprite + "#icon-google"} />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form className="mailing">
          <label>
            <h2>Подпишитесь на рассылку</h2>
            <span className="box-wrapper">
              {/* <input type="email" name="email" placeholder="E-mail" /> */}
              <a
                target="_blank"
                className="mailing-link"
                href="https://n322073.yclients.com/"
                rel="noreferrer"
              >
                Записаться Онлайн
                <svg width={24} height={24}>
                  <use xlinkHref={sprite + "#icon-icon-send"} />
                </svg>
              </a>
            </span>
          </label>
        </form>
      </div>
    </FooterContainer>
  );
};

export default Footer;
