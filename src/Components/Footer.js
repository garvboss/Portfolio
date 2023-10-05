import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.svg";
import l from "../images/l10.jfif";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/gh6.png";
import navIcon3 from "../images/nav-icon3.svg";

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img className="footer-logo" src={l} alt="logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon si">
                            <a href="https://www.linkedin.com/in/garvbhatia/" target="_main"><img src={navIcon1} alt="Icon1" /></a>
                            <a href="https://github.com/garvboss" target="_main"><img className="github" src={navIcon2} alt="Icon2" /></a>
                            <a href="https://www.instagram.com/Garv-Bhatia" target="_main"><img src={navIcon3} alt="Icon3" /></a>
                        </div>
                        <p className="my_name">By - GarvB🙂</p>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}