import React from 'react'

function ProjectCard({ src, link, project_name, project_Discription, }) {
  return (
    <a href={link} target='_blank'>
      <img className='hover' src={src} alt={`${project_name} logo`} />
      <h3>{project_name}</h3>
      <p>{project_Discription}</p>
    </a>
  )
}

export default ProjectCard
