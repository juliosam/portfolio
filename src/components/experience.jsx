import WorkCard from "./workCard"

const jobs = [
  {
    company: "Madai & Cad Cam Mty",
    description: "Scrum master for the development of two hybrid apps and an internal Software. Product Owner for the development of two web pages and a physical store",
    position: "Scrum Master",
    period: "April 2016 - February 2019",
    location: "Monterrey, Mexico",
    page: "https://madai.mx/"
  },
  {
    company: "Promotora Merhen",
    description: "Collaborate with engineers and architects o determine project specifications. Negotiate contracts with external suppliers to reach advantageous agreements.",
    position: "Project Manager",
    period: "April 2019 - February 2021",
    location: "Reynosa, Mexico",
    page: "http://www.pmerhen.com/"
  },
  {
    company: "Doctype LLC",
    description: "Component development with React JS. State management and Fetching with React Hooks. Implementation of Typescript with React. Consume of Rest API in the frontend.",
    position: "Frontend Developer",
    period: "March 2021 - Now",
    location: "McAllen, Texas",
    page: "http://doctype.com/"
  },
]

const Experience = () => {
  return (
    <section>
      <h2 className="mb-3">Work Experience</h2>
      <div className="d-flex justify-content-around flex-wrap mb-5">
        {
          jobs.map(job => {
            return( <WorkCard job={job}/>)
          })
        }
      </div>
    </section>
  )
}

export default Experience
