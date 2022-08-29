import React, { useEffect, useState } from 'react'
import logo from '../assets/images/JS-logo.png'
import link from '../assets/images/nav-icon1.svg'
import face from '../assets/images/nav-icon2.svg'
import insta from '../assets/images/nav-icon3.svg'
import { Link } from 'react-router-dom'

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
      <nav className={scrolled ? "scrolled navbar navbar-expand-lg navo" : "navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className="container">
          <div className='logo-complete mx-5'>
            <img src={logo} alt='logo' className='logo'/>
            <button className='julioS'>Julio Samaniego</button>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                  to='./'
                  className={activeLink === 'home' ? "nav-link active" : "nav-link"} 
                  aria-current="page" 
                  href="#home"
                  onClick={() => onUpdateActiveLink('home')}
                  > Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to ='./skills'
                  className={activeLink === 'skills' ? "nav-link active" : "nav-link"}  
                  href="#skills"
                  onClick={() => onUpdateActiveLink('skills')}
                  > Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to='./projects'
                  className={activeLink === 'projects' ? "nav-link active" : "nav-link"} 
                  href="#projects"
                  onClick={() => onUpdateActiveLink('projects')}
                  >Projects
                </Link>
              </li>
            </ul>
            <span className='navbar-text mx-5 mb-1'>
              <div className='social-icon '>
                <a href='https://www.linkedin.com/in/julio-samaniego-060101125/'><img src={link} alt='linkedIn' className='mx-2'/></a>
                <a href='https://github.com/juliosam'><img src={face} alt='Facebook' className='mx-2'/></a>
                <a href='https://github.com/juliosam'><img src={insta} alt='Instagram' className='mx-2'/></a>
              </div>
            </span>
            <button type="button" className="btn btn-outline-light">Let's connect</button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
