import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div className='skill-card'>
      <div className='skill-img-div'>
        <img src={skill.logo} alt={skill.name}/>
      </div>
      <div className='skill-nameAndLevel'>
        <h4>{skill.name}</h4>
        <p>Level: {skill.level}</p>
      </div>
      <div className='progres-bar-container'>
        <div className='progres-bar' style={{width :`${(skill.percent)}%`}}></div>
        <div className='cero-100'>
          <div>0</div>
          <div>100</div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
