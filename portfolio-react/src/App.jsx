import Background from './components/background'
import Intro from './components/intro'
import About from './components/about'
import MyProjects from './components/projects'
import Footer from './components/footer'


function App() {

  return (
    <>
      <Background/>
      <section>
        <Intro/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <MyProjects/>
      </section>
      <Footer/>
    </>
  )
}

export default App
