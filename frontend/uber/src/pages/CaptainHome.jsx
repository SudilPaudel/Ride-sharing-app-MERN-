import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {
  const [ridePopupOpen, setRidePopupOpen] = useState(true)
  const [confirmRidePopupOpen, setConfirmRidePopupOpen] = useState(false)
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

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
        <img className='w-16 ' src="https://logos-download.com/wp-content/uploads/2021/01/Pathao_Logo.png" alt="logo" />
        <Link to={'/home'} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover object-center' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
      </div>
      <div className='h-2/5 p-6 border-t-2 border-gray-300 bg-white rounded-t-3xl shadow-xl'>
        <CaptainDetails />
      </div>
      <div ref={ridePopoupRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9 translate-y-full left-5  border-1 rounded-2xl shadow-md '>
        <RidePopup setRidePopupOpen={setRidePopupOpen} setConfirmRidePopupOpen={setConfirmRidePopupOpen}/>
      </div>
      <div ref={confirmRidePopupRef} className='fixed bg-white h-screen mr-6 z-10 bottom-0 p-5 translate-y-full left-9  border-1 rounded-2xl shadow-md '>
        <ConfirmRidePopup setConfirmRidePopupOpen={setConfirmRidePopupOpen}  />
      </div>
    </div>
  )
}

export default CaptainHome