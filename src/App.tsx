import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Testimonials } from './components/Testimonials'
import "./App.css";
import { Cta } from './components/Cta'

function App() {

  return (
    <>
      <div className='bg'>
      <Navbar/>
      <Hero/>
      </div>
      <div className='bg-2'>
        <About/>
        <Testimonials/>
      </div>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
