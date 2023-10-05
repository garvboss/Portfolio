import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, link}) => {
    return (
        <Col size={10} sm={10} md={5} className="imgCol">
            <a href={link} target="_main"><div className="proj-imgbx">
                <img className="proj-img" src={imgUrl} alt="im"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                </div>
            </div></a>
        </Col>
    )
}