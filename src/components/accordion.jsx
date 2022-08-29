import React from 'react'

const Accordion = () => {
  return (
    <div className="accordion accordion-body" id="accordionExample">
      <div className="accordion-item darken">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button darken" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Formal Education
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Civil Engineer from UANL.</strong> One of the 10 best universities in Mexico and one of the hardest careers in it. <code>. Why i switched to Tech?</code> I have
             personal and profetional reasons, in the profetional side is because Tech industry is healthier than construction, it takes better care of their workers and is less risky 
             by nature. And in the personal side ...whell that is kind of personal haha, but if you ask me i wont mind to explain
          </div>
        </div>
      </div>
      <div className="accordion-item darken">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed darken" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Courses and Certifications
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body courses">
            <strong>Full Stack Web Development with React Specialization.</strong> Coursera - Hong Kong University <br/>
            <strong>Software Product Management Specialization.</strong> Coursera - University of Alberta <br/>
            <strong>Financial Markets Course </strong> Coursera - Yale
          </div>
        </div>
      </div>
      <div className="accordion-item darken">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed darken" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Hobbies and Interests
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Sports and Comedy.</strong> More precisely in sports i like the two footballs the american one
            with the helmets and the also called soccer. I like doing sports too but as "i screwed my knee" (mexican meme) 
            i only do little excercise for health. And about the comedy I like stand up and a few sitcoms like Seinfeld.  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
