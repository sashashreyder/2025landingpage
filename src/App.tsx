import './App.css'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
