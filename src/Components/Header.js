import React from 'react'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import l from '../images/l4.jpg';
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/gh6.png';
import navIcon3 from '../images/nav-icon3.svg'; 
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50)
            {
                setScrolled(true);
            }
            else
            {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Router>
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img className="navbar-logo" src={l} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/garvbhatia/" target="_main"><img src={navIcon1} alt="l"/></a>
                <a href="https://github.com/garvboss" target="_main"><img className="github" src={navIcon2} alt="f"/></a>
                <a href="https://www.instagram.com/Garv-Bhatia" target="_main"><img src={navIcon3} alt="i"/></a>
            </div>
        <HashLink to='#connect'>
        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </HashLink>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</Router>
  )
}

