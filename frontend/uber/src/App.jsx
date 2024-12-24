import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/userContext'
import GetStarted from './pages/GetStarted'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'

const App = () => {
  const ans = useContext(UserDataContext)
  console.log(ans)
  return (
    <div>
      <Routes>
        <Route path='/' element={<GetStarted />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />

        <Route path='/home' element={<UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>}
        />
        <Route path='/logout' element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>} />
        {/* error page(no url) */}
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App