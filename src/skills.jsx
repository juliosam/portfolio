import React from 'react'
import JSlogo from './assets/images/logos/JS-logo-3.png';
import HTlogo from './assets/images/logos/HTML-logo.png';
import CSlogo from './assets/images/logos/CSS-logo.png';
import RElogo from './assets/images/logos/RE-logo.png';
import TSlogo from './assets/images/logos/TS-logo.png';
import BSlogo from './assets/images/logos/BS-logo.png';
import NXlogo from './assets/images/logos/NX-logo.png';
import TWlogo from './assets/images/logos/TW-logo.png';
import MUlogo from './assets/images/logos/MUI-logo.png';
import EXlogo from './assets/images/logos/EX-logo.png';
import STlogo from './assets/images/logos/ST-logo.png';
import RXlogo from './assets/images/logos/RX-logo.png';
import SkillCard from './components/skillCard';

const allSkills = [
  {
    id: 1,
    logo:RElogo,
    name: 'React.js',
    level: 'Above medium',
    percent: 78, 
  },
  {
    id: 2,
    logo:JSlogo,
    name: 'JavaScript',
    level: 'Above medium',
    percent: 75, 
  },
  {
    id: 3,
    logo:NXlogo,
    name: 'Next.js',
    level: 'Above medium',
    percent: 70, 
  },
  {
    id: 4,
    logo:TSlogo,
    name: 'TypeScript',
    level: 'Medium',
    percent: 47, 
  },
  {
    id: 5,
    logo:BSlogo,
    name: 'Bootstrap',
    level: 'Above Medium',
    percent: 67, 
  },
  {
    id: 6,
    logo:CSlogo,
    name: 'CSS',
    level: 'Advanced',
    percent: 83, 
  },
  {
    id: 7,
    logo:HTlogo,
    name: 'HTML',
    level: 'Above Medium',
    percent: 70, 
  },
  {
    id: 8,
    logo:TWlogo,
    name: 'Tailwind',
    level: 'Above Medium',
    percent: 75, 
  },
  {
    id: 9,
    logo:MUlogo,
    name: 'Material UI',
    level: 'Medium',
    percent: 50, 
  },
  {
    id: 10,
    logo:EXlogo,
    name: 'Express.js',
    level: 'Beginner',
    percent: 28, 
  },
  {
    id: 11,
    logo:STlogo,
    name: 'Strapi',
    level: 'Beginner',
    percent: 30, 
  },
  {
    id: 12,
    logo:RXlogo,
    name: 'Redux',
    level: 'Beginner',
    percent: 28, 
  }
]

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='my-5'>This is my set of Skills</h1>
      <div className='skills-container'>
        {allSkills.map(skill => {
          return(
            <SkillCard skill={skill} key={skill.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
