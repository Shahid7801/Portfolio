import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import bgimage from '../../assets/svg/programmer-profile.avif';
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: "#def2f1",
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${"#def2f1"}`,
            backgroundColor: "black",
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: "#def2f1",
                color: "black",
                border: `3px solid ${"#def2f1"}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: "black",
            color: "#def2f1",
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${"#def2f1"}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: "#def2f1",
                color: "black",
                border: `3px solid ${"#def2f1"}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>

                <div
                    className='landing--container-left'
                    style={{
                        backgroundColor: 'rgb(24, 24, 27)',
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0)',
                        backgroundSize: '4px 4px',
                    }}

                >



                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: "#def2f1" }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: "#def2f1" }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: "#def2f1" }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: "#def2f1" }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaBlogger
                                    className='landing--social'
                                    style={{ color: "#def2f1" }}
                                    aria-label='Blogger'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    alt=''
                    className='landing--img'
                    style={{
                        backgroundImage: `url(${bgimage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: "#def2f1",
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{
                        backgroundColor: 'rgb(24, 24, 27)',
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0)',
                        backgroundSize: '4px 4px',
                    }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: "#def2f1" }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name2}</h1>
                        <p>{headerData.desciption}</p>
                        <p>{headerData.desciption2}</p>


                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
