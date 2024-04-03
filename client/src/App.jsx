import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'

export default function App() {
  return (
    < BrowserRouter>
      < Header/>
      <Routes > 
          < Route path='/' element= { <Home />} />
          < Route path='/about' element= { <About />} />
          < Route path='/dashboard' element= { <Dashboard />} />
          < Route path='/login' element= { <Login />} />
          < Route path='/signup' element= { <SignUp />} />
          < Route path='/search' element= { <Search />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  )
}
