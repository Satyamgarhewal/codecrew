import { Container, Grid, Link } from "@nextui-org/react";
import React from "react";
import "../Footer/Footer.scss";
import Logo from "../../../public/assets/images/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="foot-main">
        <Container md>
          <Grid.Container gap={2} justify="center">
            <Grid xs={4}>
              <div className="footerlogo">
                <img src={Logo} className="head-logo" alt="LOGO" />
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="footname">
                <ul>
                  <li>
                    <Link href="">What we do</Link>
                  </li>
                  <li>
                    <Link href="">What we do</Link>
                  </li>
                  <li>
                    <Link href="">What we do</Link>
                  </li>
                  <li>
                    <Link href="">What we do</Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="footname">
                <ul>
                  <li>
                    <Link href="">What we do</Link>
                  </li>
                  <li>
                    <Link href="">What we do</Link>
                  </li>
                  <li>
                    <Link href="">What we do</Link>
                  </li>
                  <li>
                    <Link href="">What we do</Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid.Container>
        </Container>
      </div>
    </>
  );
};
export default Footer;
