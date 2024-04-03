import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import LoginCustomer from './pages/LoginCustomer'
import LoginPartner from './pages/LoginPartner'
import Loginas from './pages/Loginas'
import Signuppartner from './pages/Signuppartner'

export default function App() {
  return (
    < BrowserRouter>
      < Header/>
      <Routes > 
          < Route path='/' element= { <Home />} />
          < Route path='/about' element= { <About />} />
          < Route path='/dashboard' element= { <Dashboard />} />
          < Route path='/login' element= { <LoginCustomer />} />
          < Route path='/login-partner' element= { <LoginPartner />} />
          < Route path='/signup' element= { <SignUp />} />
          < Route path='/search' element= { <Search />} />
          < Route path='/loginas' element= { <Loginas />} />
          < Route path='/signuppartner' element= { <Signuppartner />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  )
}
