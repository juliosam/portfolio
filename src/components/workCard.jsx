
const WorkCard = ({job}) => {
  return (
    <div className="card my-3 p-3 text-bg-dark col-xs-10 col-sm-10 col-md-5 col-xl-3">
      <div className="card-body">
        <h5 className="card-title">{job.company}</h5>
        <p className="card-text">{job.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-bg-dark">{job.position}</li>
        <li className="list-group-item text-bg-dark">{job.period}</li>
        <li className="list-group-item text-bg-dark">{job.location}</li>
      </ul>
      <div className="card-body">
        <a href={job.page} className="card-link">{job.page}</a>
      </div>
    </div>
  )
}

export default WorkCard
