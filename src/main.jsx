import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '../src/components/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <Browser>
  <Navbar/>
    <Routes>
      
      <Route path='/' element={<App/>}></Route>
      

    </Routes>
    <Footer/>
  </Browser>
)
