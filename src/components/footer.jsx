import logo from '../assets/images/JS-logo.png'
import link from '../assets/images/nav-icon1.svg'
import face from '../assets/images/nav-icon2.svg'
import insta from '../assets/images/nav-icon3.svg'

const Footer = () => {
  return (
    <div className="footer p-5 d-flex justify-content-around">
      <div className='logo-complete mx-5'>
        <img src={logo} alt='logo' className='logo'/>
        <button className='julioS'>Julio Samaniego</button>
      </div>
        <div className='social-icon me-5'>
          <a href='https://www.linkedin.com/in/julio-samaniego-060101125/'><img src={link} alt='linkedIn' className='mx-3'/></a>
          <a href='https://github.com/juliosam'><img src={face} alt='Facebook' className='mx-3'/></a>
          <a href='https://github.com/juliosam'><img src={insta} alt='Instagram' className='mx-3'/></a>
        </div>
    </div>
  )
}

export default Footer
