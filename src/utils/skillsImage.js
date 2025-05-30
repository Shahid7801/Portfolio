import html from '../assets/svg/skills/html.svg'
import node from '../assets/svg/skills/node.jpg'
import word from '../assets/svg/skills/word.jpg'

import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import vue from '../assets/svg/skills/vue.svg'

import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'

import c from '../assets/svg/skills/c.jpg'

import java from '../assets/svg/skills/java.svg'

import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'

import git from '../assets/svg/skills/git.svg'
import github from '../assets/svg/skills/github.jpg'


import office from '../assets/svg/skills/word.jpg'
import picsart from '../assets/svg/skills/picsart.svg'


import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case '':
            return ;
        case 'html':
            return html;
        
        case 'word':
            return word;
        case 'node':
            return node;
        case 'css':
            return css;
        case 'c':
            return c;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
     
        case 'react':
            return react;
        case 'word':
            return word;
   
        case 'vue':
            return vue;
      
        
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
      
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;    
        case 'java':
            return java;
        
        case 'php':
            return php;
        case 'python':
            return python;
        
        case 'git':
            return git;
        case 'github':
            return github;
        
        case 'office':
            return office;
        case 'picsart':
            return picsart;
        case 'canva':
            return canva;
        default:
            break;
    }
}
