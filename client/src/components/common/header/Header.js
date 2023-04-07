import React from "react";
import { Link, Text } from "@nextui-org/react";
import { Container, Row } from '@nextui-org/react';
import "../header/Header.scss";
import Logo from "../../../public/assets/images/Logo.png";



const Header = (props) => {
    return (
        <>
        <Container md>
            <div className="header-main">
                <div className="header-logo">
                    <img  src={Logo}  className="head-logo" alt="LOGO" />
                </div>
                <div className="header-menu">
                    <ul>
                        <li><Link href="#">What We Do </Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Testimonials</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            </Container>



        </>

    )
}
export default Header; 