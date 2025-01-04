
import React, {useContext ,useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
const CaptainProtectedWrapper = ({children}) => {
  const token = localStorage.getItem('token')
      const {captain, setCaptain} = useContext(CaptainDataContext)
      const [loading, setLoading] = useState(true)
      

      const navigate = useNavigate()
      useEffect(() => {
          if (!token) {
              navigate('/captain-login')
          }
      }, [token])
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
          headers: {
              Authorization: `Bearer ${token}`
          },
        
      }
    ).then(res => {
         if(res.status === 200) {
            setCaptain(res.data.captain)
            setLoading(false)
         }
      }
      ).catch(err => {
          console.log(err)
          localStorage.removeItem('token')
          navigate('/captain-login')
      }
      )
      if(loading) {
          return (
              <div>Loading...</div>
          )
      }
    return (
      <>
          {children}
      </>
    )
}

export default CaptainProtectedWrapper