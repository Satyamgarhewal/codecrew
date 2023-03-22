import React from "react";
import { Link, Text } from "@nextui-org/react";
import { Container, Row } from '@nextui-org/react';
import "../header/Header.scss";



const Header = (props) => {
    return (
        <>
        <Container md>
            <Row>
            <div className="header-main">
                <div className="header-logo">
                    <img src="" alt="LOGO" />
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
            </Row>
            </Container>



        </>

    )
}
export default Header; 