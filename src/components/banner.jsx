import React from 'react'

const Banner = () => {
  return (
    <section className='banner' id='home'>
      <div className='container align-items-center'>
        <div className='row mx-auto'>
          <div className='col col-xs-12 col-md-6 col-xl-7'>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{'Hi! i am a webdecoded'}<span className='wrap'> web developer</span></h1>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
