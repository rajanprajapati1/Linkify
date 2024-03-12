import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, redirect } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { UseAuth } from './Contexts/CustomHook'
import axios from 'axios';
import Navbar from './components/Navbar'
import DashBoard from './Pages/DashBoard'
import Pricing from './Pages/Pricing'
import UrlTester from './Pages/UrlTester'
const App = () => {
  const { User, SetUser,
    SetLoading } = UseAuth();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      SetLoading(true)
      axios.get('http://localhost:8001/api/v1/user/verify-token', {
        headers: {
          'Authorization': `Bearer JwtAuth ${JSON.parse(localStorage.getItem('token'))}`

        },
      })
        .then(response => {
          SetUser(true);
          SetLoading(false)
        })
        .catch(error => {
          const TokenExpire = (error?.response?.data?.Token)
          alert(TokenExpire)
          localStorage.removeItem('token');
        });
    }
  }, [SetUser]);
  return (
    <div className='Container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path='/' element={User ? <Homepage /> : <Navigate to="/login" />} />
              <Route path='/login' element={User ? <Navigate to="/" /> : <Login />} />
              <Route path='/signup' element={User ? <Homepage /> : <Signup />} />
              <Route path='/dashboard' element={User ? <DashBoard /> : <Navigate to="/login" />} />
              <Route path='/Hire' element={User ? <Homepage /> : <Navigate to="/login" />} />
              <Route path='/Pricing' element={User ? <Pricing /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
