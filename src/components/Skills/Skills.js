import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor:"#17252a",
        boxShadow: `0px 0px 40px ${"#2b7871"}`
    }

    return (
        <div className="skills" style={{backgroundColor: "#def2f1"}}>
            <div className="skillsHeader">
                <h2 style={{color:"#17252a"}}>SKILLS</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={50} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="right"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: "#def2f1"}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
