import React from 'react'

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
        <button>Send it to me</button>
      </form>
    </div>
  )
}

export default Contact
