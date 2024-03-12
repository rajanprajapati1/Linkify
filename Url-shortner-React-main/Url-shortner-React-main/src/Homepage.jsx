import React from 'react'
import Home from './Pages/Home'
import Genrate from './components/Genrate'
import Loader from './components/Loader'
import { UseAuth } from './Contexts/CustomHook'

const Homepage = () => {
  const { Loading } = UseAuth()
  return (
    <div>

      {Loading ? <Loader /> :
        <>
          <Home />
          <Genrate />
        </>
      }
    </div>
  )
}

export default Homepage
