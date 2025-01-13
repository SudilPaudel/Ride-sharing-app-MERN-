import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'
import LiveTracking from '../components/LiveTracking'

const Riding = (props) => {
  const location = useLocation()
  const {ride} = location.state || {}
  const navigate = useNavigate()
  const {socket} = useContext(SocketContext)
  socket.on('ride-ended', ()=>{
    navigate('/home')
  })
  return (
    <div className='h-screen bg-gradient-to-b from-blue-50 to-white'>
  <Link to={'/home'} className='fixed right-4 top-4 h-12 w-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out'>
    <i className="text-2xl ri-home-5-line"></i>
  </Link>
  <div className='h-2/5 overflow-hidden'>
    <LiveTracking />
  </div>
  <div className='h-3/5 p-6 border-t-2 border-gray-300 bg-white rounded-t-3xl shadow-xl'>
    <div className='flex items-center justify-between mb-5'>
      <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="car_search" />
      <div className='text-right'>
        <h2 className='text-xl font-semibold text-gray-800'>Customer: {ride.user.fullName.firstName + " " + ride.user.fullName.lastName}</h2>
        <h2 className='text-xl font-semibold text-gray-800'>Captain: {ride.captain.fullName.firstName + " " + ride.captain.fullName.lastName}</h2>
        <h4 className='text-2xl font-bold text-gray-900 -mt-1 -mb-1'>{ride.captain.vehicle.plate}</h4>
        <p className='text-sm text-gray-500'></p>
      </div>
    </div>

    <div className='flex flex-col gap-5'>
      <div className='w-full'>
        <div className='flex items-center justify-between p-3 border-b-2 border-gray-300 rounded-xl hover:bg-gray-50 transition duration-300'>
          <i className="text-2xl ri-map-pin-range-fill text-blue-500"></i>
          <div>
            <h3 className='text-lg font-medium text-gray-800'>{ride.pickup}</h3>
            <p className='text-sm text-gray-600'></p>
          </div>
        </div>
        <div className='flex items-center justify-between p-3 border-b-2 border-gray-300 rounded-xl hover:bg-gray-50 transition duration-300'>
        <i className="text-lg ri-map-pin-range-fill  text-blue-500"></i>
          <div>
            <h3 className='text-lg font-medium text-gray-800'>{ride.destination}</h3>
            <p className='text-sm text-gray-600 '></p>
          </div>
        </div>
        <div className='flex items-center justify-center p-3 mt-3 border-b-2 border-gray-300 rounded-xl hover:bg-gray-50 transition duration-300'>
          <i className="text-2xl ri-currency-line text-green-500"></i>
          <div>
            <h3 className='text-lg font-medium text-gray-800'>रु{ride.fare}</h3>
            <p className='text-sm text-gray-600'>Cash Payment</p>
          </div>
        </div>
      </div>
    </div>
    

    <button className='w-full mt-6 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold p-3 rounded-xl shadow-lg hover:scale-105 transition duration-300 active:shadow-none'>
      Make a Payment
    </button>
  </div>
</div>

  )
}

export default Riding