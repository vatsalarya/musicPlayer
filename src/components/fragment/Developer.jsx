import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Developed By</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <div className={"Card-details"}>
                        <h3>Vatsal Arya</h3>
                        <p>Full Stack developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at VIIT Pune.</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">

                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/vatsal-arya"}  title={"vatsalarya"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/vatsalarya1"}  title={"vatsal_arya"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://vatsalarya.github.io/portfolio/"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;