import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import link from '../assets/images/nav-icon1.svg'
import face from '../assets/images/nav-icon2.svg'
import insta from '../assets/images/nav-icon3.svg'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[])

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }

  return (
    <div>
      <nav className={scrolled ? "scrolled navbar navbar-expand-lg bg-light" : "navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className="container">
          <img src={logo} alt='logo' className='mx-5'/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                  className={activeLink === 'home' ? "nav-link active" : "nav-link"} 
                  aria-current="page" 
                  href="#home"
                  onClick={() => onUpdateActiveLink('home')}
                  > Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={activeLink === 'skills' ? "nav-link active" : "nav-link"}  
                  href="#skills"
                  onClick={() => onUpdateActiveLink('skills')}
                  > Skills
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={activeLink === 'projects' ? "nav-link active" : "nav-link"} 
                  href="#projects"
                  onClick={() => onUpdateActiveLink('projects')}
                  >Projects
                </a>
              </li>
            </ul>
            <span className='navbar-text mx-5 mb-1'>
              <div className='social-icon '>
                <a href='#'><img src={link} alt='linkedIn' className='mx-2'/></a>
                <a href='#'><img src={face} alt='Facebook' className='mx-2'/></a>
                <a href='#'><img src={insta} alt='Instagram' className='mx-2'/></a>
              </div>
            </span>
            <button type="button" className="btn btn-outline-light">Let's connect</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
