import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard.js";
import projImg1 from "../images/ms.png";
import projImg2 from "../images/wc.png";
import projImg3 from "../images/mg.png";
import projImg4 from "../images/dk.png";
export const Projects = () => {

    const projects = [
        {
            title: "My Store",
            description: "",
            imgUrl: projImg1,
            link: "https://github.com/garvboss/My-Store"
        },
        {
            title: "DrumKit",
            description: "",
            imgUrl: projImg4,
            link: "https://github.com/garvboss/DrumKit",
        },
        {
            title: "Write Your Code",
            description: "",
            imgUrl: projImg2,
            link: "https://github.com/garvboss/Write-Your-Code"
        },
        {
            title: "Meme Generator",
            description: "",
            imgUrl: projImg3,
            link: "https://github.com/garvboss/Meme_Generator",
        }, 
        
    ];

    return(
        <section className="project" id="projects">
            <Container className="co">
                <Row className="ro">
                    <Col size={12} className="c">
                        <h2>Projects</h2>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                          key={index}
                                          {...project}
                                          />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2} alt="bg"></img> */}
        </section>
    )
}