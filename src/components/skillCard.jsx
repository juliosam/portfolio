import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div className='skill-card'>
      <div className='skill-img-div'>
        <img src={skill.logo} alt={skill.name}/>
      </div>
      <div className='skill-nameAndLevel'>
        <h3>{skill.name}</h3>
        <p>Level: {skill.level}</p>
      </div>
    </div>
  )
}

export default SkillCard
