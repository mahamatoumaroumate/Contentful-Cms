import React from 'react'
import { useFetchData } from './FetchData'
const Projects = () => {
  const { isLoading, projects } = useFetchData()

  if (isLoading) {
    return (
      <section className='projects'>
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <div className='projects'>
      <div className='project-text'>
        <h1>Projects</h1>
        <div className='underline'></div>
      </div>
      <section className='project-center'>
        {projects.map((item) => {
          const img = item?.img?.file?.url
          return (
            <a
              key={item.id}
              href={item.url}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <img src={img} alt={item.title} />
              <h5>{item.title}</h5>
            </a>
          )
        })}
      </section>
    </div>
  )
}

export default Projects
