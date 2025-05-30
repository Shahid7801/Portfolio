import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about"   style={{
            backgroundColor: '#def2f1',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 2px, transparent 0)',
            backgroundSize: '3px 3px',
        }}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor:"black"}}></div>
              <div className="style-circle" style={{backgroundColor: "black"}}></div>
              <div className="style-line" style={{backgroundColor: "black"}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <p style={{color:"black", fontFamily:"fantasy" , fontSize:"20px" , font:"2xl"}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
