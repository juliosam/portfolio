import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='mb-4'>Contact Me</h2>
      <form>
        <label>Name</label><input/>
        <label>Email</label><input/>
        <label>Phone Number</label><input/>
        <div className='message-div'>
          <label>Message</label><textarea cols={30} rows={8}/>
        </div> 
        <Link to='/sended'><button>Send it to me</button></Link>
      </form>
    </div>
  )
}

export default Contact
