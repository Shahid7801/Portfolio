import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:"#2b7a78",
            "&:hover": {
                backgroundColor:"#3aafa9",
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="education-details">
                    <h6 style={{color: "#17252a"}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: "black"}}>{course}</h4>
                    <h5 style={{color: "#17252a"}}>{institution}</h5>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
