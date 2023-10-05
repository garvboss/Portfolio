import {Container, Row, Col} from "react-bootstrap";
import contactImg from "../images/contact-img.svg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm
        ('service_jjvbi63', 
         'template_gfxfsck', 
          form.current,
         'T11Se0kX7YfYpf1P7'
         )

        .then(
            (result) => {
                console.log(result.text);
                console.log("message sent")
                e.target.reset();
            },
            (error) => {
            console.log(error.text);
        });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col size={12} md={6}>
                        <h2 className="contact-h">Get In Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text"  placeholder="First Name" name="user_FirstName"/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text"  placeholder="Last Name" name="user_LastName"/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email"  placeholder="Email Address" name="user_email"/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel"  placeholder="Phone No." name="user_phone"/>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6"  placeholder="Message" name="message"></textarea>
                                    <button type="submit"><span>Send</span></button>
                                </Col>
                               
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}