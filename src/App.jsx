import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import { Header } from './components/Header/'
import { Footer } from './components/footer'
import { BsGithub } from 'react-icons/bs'
import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaGit } from 'react-icons/fa'
import { SiRubyonrails, SiJavascript, SiAxios, SiRedux, SiPostgresql } from 'react-icons/si'

function App() {
  const icons = [ <FaGit />, <BsGithub />, <FaReact />, <SiRubyonrails />, <SiJavascript />, <FaCss3Alt />, <FaHtml5 />, <SiAxios />, <SiRedux />, <SiPostgresql />, <FaBootstrap /> ]
  return (
    <div className='page-container'>
      <Header />
      <Container className='main-container'>
        <section id="main">
          <h1>Ramiro Alvarez Abelleira.</h1>
          <h3>Full Stack Web Developer.</h3>
        </section>
        
        <section id='about-me'>
          <div>
            <h3>About me.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto aut rerum doloribus. Commodi, provident. 
              Sunt magnam natus asperiores temporibus cum quaerat sapiente praesentium in. 
              Doloribus ipsa omnis consectetur deleniti! Reprehenderit sint consectetur nulla. 
              Architecto quasi totam quisquam tempore laudantium distinctio accusamus necessitatibus deserunt animi eveniet aliquam, 
              quia ex beatae expedita?</p>
          </div>
        </section>
        <section id='projects'>
          <h3>My Projects.</h3>
          <p>List of projects</p>
        </section>
        <section id='skills'>
          <h3>My Skills</h3>
          <Row >
            {
              ['Git', 'GitHub', 'React', 'Ruby on Rails', 'JavaScript', 'Css', 'Html', 'Axios', 'Redux', 'PostgreSQL', 'Bootstrap'].map((tool, i) => {
                return <Col className='tool'>
                          {icons[i]}
                          {tool}
                        </Col>
              }) 
            }
          </Row>
        </section>
        <section id='contact'>
          <h3>contact me</h3>
          <p>Form</p>
        </section>
      </Container>
      <Footer />
    </div>
  )
}

export default App
