import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({id, title, details, date, field, image}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:"#17252a",
            "&:hover": {
                backgroundColor:"#2b787a",
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`}>
               <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{color: "#def2ef"}}>{title}</h2>
                        <p style={{color: "grey"}}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{color: "#3aafa9"}}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>   
                    </div>
                </div> 
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>
           </div>
        </Fade>
        
    )
}

export default AchievementCard
