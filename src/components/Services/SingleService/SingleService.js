import React,{useContext} from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, icon}) {

    const { theme } = useContext(ThemeContext);
    return (
        <Fade bottom>
            <div key={id} className="single-service" style={{backgroundColor:"#def2f1"}}>
                <div className="service-content"  style={{color:"#17252a"}}>
                    <i className="service-icon">{icon}</i>
                    <h4  style={{color:"#17252a"}}>{title}</h4>  
                </div>         
            </div>
        </Fade>
    )
}

export default SingleService
