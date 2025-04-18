import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'

const App = () => {
  return (
    <div className='container'>
      <Hero />
      <About />
      <Skill />
    </div>
  )
}

export default App