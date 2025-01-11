import axios from 'axios'
import React, {useContext, useState ,useEffect} from 'react'

import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
const UserProtectedWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserDataContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    

        axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if(res.status === 200) {
               setUser(res.data)
                setLoading(false)
            }
        }
        ).catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/login')
        }
        )
    }, [token])
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

export default UserProtectedWrapper