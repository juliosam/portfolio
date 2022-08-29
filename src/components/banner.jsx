import React, { useEffect, useState } from 'react'
import headerImg from '../assets/images/header-img.svg'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import Accordion from './accordion';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [' FrontEnd Developer', ' Jr Fullstack Dev', ' Web Designer'];
  const period = 1200;
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {clearInterval(ticker)}
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta / 1.5)
    }

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period)
    } else if(isDeleting && updatedText === ''){
      setIsDeleting(false)
      setLoopNum(loopNum + 1);
      setIndex(1)
      setDelta(300);
    } else {
        setIndex(prevIndex => prevIndex + 1);
      }
  }

  return (
    <section className='banner py-3' id='home'>
      <div className='container align-items-center'>
        <div className='row mx-auto'>
          <div className='col col-xs-12 col-md-6 col-xl-7'>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1 className='animated-title my-3'>{'Hi! i am a'}<span className='wrap'>{text}</span></h1>
            <p className='my-3'> 
              My name is Julio Samaniego, I look at my self as a creative, problem solver, team player and responsible
              Frontend Developer who domains Javascript and React, in less manner Typescript and
              Next JS and has worked with Redux for state management. To style my apps I use Tailwind, Bootstrap, 
              Material UI and plain CSS.
            </p>
            <button className="btn btn-outline-light px-4 py-3 my-3">Let's connect <ArrowRightCircle size={25} className="mx-2"/></button>
            <Accordion/>
          </div>
          <div className='col col-xs-12 col-md-6 col-xl-5'>
            <img src={headerImg} alt='Header'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
