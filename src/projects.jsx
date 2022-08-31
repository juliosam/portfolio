import React from 'react';
import ipadress from './assets/images/ip-adress-tracker.png';
import alsara from './assets/images/alsara-app.png';
import shortco from './assets/images/url-shortener.png';
import admon from './assets/images/admon-soft.png';
import ProjectCard from './components/projectCard'

const projects = [
  {
    id: 1,
    name: "IP tracking",
    description: "Receives an IP address and returns information of it's location provided by Apify, and with Leaflet shows this location in a map",
    techStack: "Javascript, Leaflet, Apify, HTML, CSS",
    design: "Frontend Mentor",
    image: ipadress,
    github: "https://github.com/juliosam/ip-adress-tracker"
  },
  {
    id: 2,
    name: "Alsara Website",
    description: "Website for my wife's personal brand of fantasy jewelry retail. And for me, my first fullstack app using express for the backend",
    techStack: "React.js, Express.js, Apify, HTML, CSS",
    design: "By me",
    image: alsara,
    github: "https://github.com/juliosam/Alsara-react-bootst-express"
  },
  {
    id: 3,
    name: "URL Shortener",
    description: "Recibes an URL address and return a short equivalent of it, that you can copy with the press of a button",
    techStack: "Javascript,Shrtco, HTML, CSS",
    design: "Frontend Mentor",
    image: shortco,
    github: "https://github.com/juliosam/url-shortening"
  },
  {
    id: 4,
    name: "Admon Soft",
    description: "Management App for a supply company includes Orders, Products and Users pages. Is my first fullstack attempt using Strapi for the backend",
    techStack: "NextJS, Typescript, MaterialUI, Strapi",
    design: "By me",
    image: admon,
    github: "https://github.com/juliosam/admin-nextJS-strapi-MUI"
  }
  
]

const Projects = () => {
  return (
    <section>
      <h2 className="mb-3">Favorite Projects</h2>
      <div className="d-flex justify-content-around flex-wrap mb-5">
        {
          projects.map(project => {
            return( <ProjectCard project={project} key={project.id}/>)
          })
        }
      </div>
    </section>
  )
}

export default Projects
