import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopup'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import LiveTracking from '../components/LiveTracking'

const CaptainHome = () => {
  const [ridePopupOpen, setRidePopupOpen] = useState(false)
  const [confirmRidePopupOpen, setConfirmRidePopupOpen] = useState(false)
  const [ride, setRide]= useState(null)
  const ridePopoupRef = useRef(null)
  const confirmRidePopupRef = useRef(null)
  useGSAP(function () {
    if (ridePopupOpen) {
      gsap.to(ridePopoupRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopoupRef.current, {
        transform: 'translateY(150%)'
      })
    }
  }, [ridePopupOpen])
  useGSAP(function () {
    if (confirmRidePopupOpen) {
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupRef.current, {
        transform: 'translateY(150%)'
      })
    }
  }, [confirmRidePopupOpen])

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)
  useEffect(() => {
    socket.emit('join', { userId: captain._id, userType: 'captain' })
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
    }

    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation()


  }, [])
  async function confirmRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/confirm`,{
      rideId: ride._id,
      captainId: captain._id,

      
    },{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    })
    setRidePopupOpen()

  }

  socket.on('new-ride', (data)=>{
    console.log(data)
    setRide(data)
    setRidePopupOpen(true)
  })

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
        <img className='w-16 ' src="https://logos-download.com/wp-content/uploads/2021/01/Pathao_Logo.png" alt="logo" />
        <Link to={'/home'} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <LiveTracking />
      </div>
      <div className='h-2/5 p-6 border-t-2 border-gray-300 bg-white rounded-t-3xl shadow-xl'>
        <CaptainDetails />
      </div>
      <div ref={ridePopoupRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9 translate-y-full left-5  border-1 rounded-2xl shadow-md '>
        <RidePopup 
          ride={ride}
          setRidePopupOpen={setRidePopupOpen} 
          setConfirmRidePopupOpen={setConfirmRidePopupOpen} 
          confirmRide= {confirmRide}
        />
      </div>
      <div ref={confirmRidePopupRef} className='fixed bg-white h-screen mr-6 z-10 bottom-0 p-5 translate-y-full left-9  border-1 rounded-2xl shadow-md '>
        <ConfirmRidePopup 
        ride={ride}
        setRidePopupOpen={setRidePopupOpen}
        setConfirmRidePopupOpen={setConfirmRidePopupOpen} 
        />
      </div>
    </div>
  )
}

export default CaptainHome