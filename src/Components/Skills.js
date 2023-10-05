import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../images/color-sharp.png";
import reactt from "../images/rrr.png";
import java from "../images/java4.png";
import dsa from "../images/dsa.png";
import c1 from "../images/c++.png";
import c from "../images/ccc.png";
import em from "../images/em.png";
export const Skills = () => {

    const responsive = {

        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },

        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },

        tablet: {
            breakpoint: {max: 1024, min: 495},
            items: 2
        },

        mobile: {
            breakpoint: {max: 495, min: 0},
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2> Skills </h2>
                            <p>  I love to work on any projects where I can use my skills given below : </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={reactt} alt="Image1" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Image2" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={dsa} alt="Image4" />
                                    <h5>Data Structures & Algorithm</h5>
                                </div>
                                <div className="item">
                                    <img src={c1} alt="Image3" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={c} alt="Image5" />
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={em} alt="Image6" />
                                    <h5>Embedded System</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={colorSharp} alt="left_image" className="background-image-left" /> */}
        </section>
    )
    
}