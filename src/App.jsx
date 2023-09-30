import './App.css'
import { Header } from './components/Header/'
import { Footer } from './components/footer'

function App() {

  return (
    <div>
      <Header />
      <h1>Portafolio</h1>
      <section id='about-me'>
        <h1>About me.</h1>
        <p>some descriptive text about my self would be placed right here!</p>
      </section>
      <section id='projects'>
        <h1>My Projects.</h1>
        <p>List of projects</p>
      </section>
      <section id='skills'>
        <h3>My Skills</h3>
        <p>all my skills would be here</p>
      </section>
      <Footer />
    </div>
  )
}

export default App
