import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
const Footer     = () => {
  const yeareDate = new Date();
  const thisYear = yeareDate.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ashutosh Kumar</h1>

        <ul className="footer__list">
          <li>
            <Link
              to="about"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="qualification"
              className="footer__link"
              spy={true}
              smooth={true}
              duration={50}
            >
              Qualifications
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/tijanisylla"
            target={"_blank"}
            rel="noreferrer"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/tijanisylla"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://instagram.com/tijani__sylla/"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Youngsylla2"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Copyright {"  "} {thisYear}. {"  "}All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;