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
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const ans = useContext(UserDataContext)
  console.log(ans)
  return (
    <div>
      <Routes>
        <Route path='/' element={<GetStarted />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
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
        <Route path='/captain-home' element={<CaptainProtectedWrapper>
          <CaptainHome />
        </CaptainProtectedWrapper>}></Route>
        <Route path='/captain-logout' element={<CaptainProtectedWrapper>
          <CaptainLogout />
        </CaptainProtectedWrapper>} />
        {/* error page(no url) */}
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App