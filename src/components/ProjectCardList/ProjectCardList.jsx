import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './ProjectCardList.css'

const ProjectCardList = ({projects}) => {
  return (
    <div>
      {
        projects.map(project => {
            return <Card className='my-5 project-card'>
                        <Card.Body>
                          <Card.Img variant="top" src={`${project.img_url}`} />
                          <div className='link-description'>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Button className='button my-1' href={`${project.url}`} target='_blanck'>View site</Button>
                          </div>
                        </Card.Body>
                    </Card>
        })
      }
    </div>
  )
}

export default ProjectCardList
