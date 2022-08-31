import { Link } from 'react-router-dom'

const Sended = () => {
  return (
    <div className='sended'>
      <h1 className='mt-5'>Message Sended</h1>
      <p className='mt-4 mx-5 fs-5'>Thank you for your message, I'll check it out and answer you in no time</p>
      <div className='mt-5 fs-4'><Link to='/' className='home-link' >Go back Home</Link></div>
    </div>
  )
}

export default Sended
