import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './App.css'
import { Header } from './components/Header/'
import { Footer } from './components/footer'
import { BsGithub } from 'react-icons/bs'
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaGit } from 'react-icons/fa'
import { SiRubyonrails, SiJavascript, SiAxios, SiRedux, SiPostgresql } from 'react-icons/si'
import { ProjectCardList } from './components/ProjectCardList'



function App() {
  const projects = [
    {name: "Bariloche Vip", description: "some description would be displayed here.", img_url: 'project-bv.png', url: 'https://barilochevip.com/' }, 
    {name: "Bicimundo", description: "some description would be displayed here.", img_url: 'project-bm.png', url: 'https://bicimundostore.up.railway.app/'  }
  ]
  const icons = [ <FaGit />, <BsGithub />, <FaReact />, <SiRubyonrails />, <SiJavascript />, <FaCss3Alt />, <FaHtml5 />, <SiAxios />, <SiRedux />, <SiPostgresql />, <FaBootstrap /> ]

  return (
    <div className='page-container'>
      <main className='main-container'>
        <Header />
        <section id="main">
          <h1>Ramiro Alvarez Abelleira<span className='skewed-name'>.</span></h1>
          <h3>Full Stack <span className='skewed-dev'>Web Developer.</span></h3>
        </section>
        {/* About */}
        <section id='about-me'>
          <div>
            <h3 className='section-title'>About me.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto aut rerum doloribus. Commodi, provident. 
              Sunt magnam natus asperiores temporibus cum quaerat sapiente praesentium in.</p>
          </div>
        </section>
        {/* Projects */}
        <section id='projects'>
          <div>
          <h3 className='section-title'>My Projects.</h3>
          <ProjectCardList projects={projects} />
          </div>
        </section>
        {/* Skills */}
        <section id='skills'>
          <div>
          <h3 className='section-title'>My Skills.</h3>
          <Row>
            {
              ['Git', 'GitHub', 'React', 'Ruby on Rails', 'JavaScript', 'Css', 'Html', 'Axios', 'Redux', 'PostgreSQL', 'Bootstrap'].map((tool, i) => {
                return <Col className='tool'>
                          {icons[i]}
                          {tool}
                        </Col>
              }) 
            }
          </Row>
          </div>
        </section>
        {/* Contact */}
        <section id='contact'>
          <div>
            <h3 className='section-title'>Contact me.</h3>
            <Form className='my-4'>
              <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="content">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group>
                <Button className='button'>Submit</Button>
              </Form.Group>
            </Form>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
