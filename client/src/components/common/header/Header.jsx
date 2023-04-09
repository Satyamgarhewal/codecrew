import React from "react";
// import { Link, Text } from "@nextui-org/react";
import { Container, Row } from "@nextui-org/react";
import "../header/Header.scss";
import { Link } from "react-scroll";
import Logo from "../../../public/assets/images/Logo.png";

const Header = (props) => {
  return (
    <>
      <Container md>
        <div className="header-main">
          <div className="header-logo">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <img src={Logo} className="head-logo" alt="LOGO" />
            </Link>
          </div>

          <div>
            <ul className="header-menu">
              <li className="header-item">
                <Link
                  activeClass="active"
                  to="test1"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="header-link"
                >
                  What we do?
                </Link>
              </li>
              <li className="header-item">
                <Link
                  activeClass="active"
                  to="test1"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Technologies
                </Link>
              </li>
              <li className="header-item">
                <Link
                  activeClass="active"
                  to="test1"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Our Team
                </Link>
              </li>
              <li className="header-item">
                <Link
                  activeClass="active"
                  to="test1"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Let's Connect
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Header;
