import React, { useEffect, useState } from 'react'
import headerImg from '../assets/images/header-img.svg'
import {ArrowRightCircle} from 'react-bootstrap-icons'

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
      setDelta(500);
    } else {
        setIndex(prevIndex => prevIndex + 1);
      }
  }

  return (
    <section className='banner' id='home'>
      <div className='container align-items-center'>
        <div className='row mx-auto'>
          <div className='col col-xs-12 col-md-6 col-xl-7'>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{'Hi! i am a webdecoded'}<span className='wrap'>{text}</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid mollitia neque sint. A iste excepturi tenetur officiis porro, dignissimos qui ratione doloribus, placeat ducimus reiciendis ipsum, consequatur sit quas amet!</p>
            <button className="btn btn-outline-light px-4 py-3">Let's connect <ArrowRightCircle size={25} className="mx-2"/></button>
          </div>
          <div className='col col-xs-12 col-md-6 col-xl-5'>
            <img src={headerImg} alt='Header Image'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
