import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Card from './components/Card/Card'
import Services from './components/Pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Home/>
   <AboutMe/>
   <Projects/>
   
   </>
  )
}

export default App
