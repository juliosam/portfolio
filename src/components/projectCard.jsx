
const ProjectCard = ({project}) => {
  return (
    <div className="card my-3 p-3 text-bg-dark col-xs-10 col-sm-10 col-md-5 col-xl-5">
      <img src={project.image} className="card-img-top" alt={project.name}/>
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-bg-dark"> Tech Stack: {project.techStack}</li>
        <li className="list-group-item text-bg-dark">Design by: {project.design}</li>
      </ul>
      <div className="card-body">
        <a href={project.github} className="card-link">{project.github}</a>
      </div>
    </div>
  )
}

export default ProjectCard
