import React, { useEffect, useState } from 'react'

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
      <nav className={scrolled ? "scrolled navbar navbar-expand-lg bg-light" : "navbar navbar-expand-lg bg-light"}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                  className={activeLink === 'home' ? "nav-link active" : "nav-link"} 
                  aria-current="page" 
                  href="#home"
                  onClick={() => onUpdateActiveLink('home')}
                  >Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={activeLink === 'skills' ? "nav-link active" : "nav-link"}  
                  href="#skills"
                  onClick={() => onUpdateActiveLink('skills')}
                  >Skills
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
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
