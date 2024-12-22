import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '../src/components/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Services from './components/Pages/Services.jsx'
import Blogs from './components/Pages/Blogs.jsx'
import ContactUs from './components/Pages/ContactUs.jsx'

createRoot(document.getElementById('root')).render(
  <Browser>
  <Navbar/>
    <Routes>
      
      <Route path='/' element={<App/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>

    </Routes>
    <Footer/>
  </Browser>
)
