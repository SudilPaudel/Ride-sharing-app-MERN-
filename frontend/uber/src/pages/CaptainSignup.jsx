import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainSignup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  const [color, setColor] = useState('')
  const [plate, setPlate] = useState('')
  const [capacity, setCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const { captain, setCaptain } = useContext(CaptainDataContext)
  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: color,
        plate: plate,
        capacity: capacity,
        vehicleType: vehicleType
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)
    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setColor('')
    setPlate('')
    setCapacity('')
    setVehicleType('')

  }
  return (
    <div className='p-8 h-screen flex flex-col justify-between  from-gray-100 to-gray-200'>
      <div className='max-w-lg mx-auto'>
        <img
          className='w-28 mx-auto mb-6'
          src='https://pathao.com/wp-content/uploads/2018/12/ic_bike_feature_3.png'
          alt="logo"
        />
        <h3 className='text-2xl font-bold text-center text-gray-800 mb-6'>Sign Up As Captain</h3>
        <form onSubmit={(e) => submitHandler(e)} className='space-y-6'>
          <div>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Enter your Name</h3>
            <div className='flex gap-6 mb-4'>
              <input
                type="text"
                required
                className='bg-white w-1/2 rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                className='bg-white w-1/2 rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Enter your Email Address</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
              type="email"
              placeholder='example@email.com'
            />
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Enter your Password</h3>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
              type="password"
              placeholder='Password'
            />
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Vehicle Information</h3>
            <div className='flex gap-6 mb-4'>
              <div className='w-1/2'>
                <h3 className='text-lg font-medium text-gray-700 mb-2'>Vehicle Color</h3>
                <input
                  type="text"
                  required
                  className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
                  placeholder='Vehicle Color'
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className='w-1/2'>
                <h3 className='text-lg font-medium text-gray-700 mb-2'>Vehicle Plate</h3>
                <input
                  type="text"
                  required
                  className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
                  placeholder='Number Plate'
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                />
              </div>
            </div>
            <div>
              <h3 className='text-lg font-medium text-gray-700 mb-2'>Vehicle Capacity</h3>
              <input
                type="Number"
                required
                className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
                placeholder='Vehicle Capacity'
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Vehicle Type</h3>
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'>
              <option value="" disabled>Select Vehicle Type</option>
              <option value="bike">Bike</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className='bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 w-full text-lg transition-all duration-200 hover:bg-blue-700'>
            Sign Up
          </button>

          <p className=' text-center text-sm text-gray-600'>
            Already have a Captain Account? <Link to="/captain-login" className="text-blue-600 hover:text-blue-700">LogIn Here</Link>
          </p>
        </form>
      </div>

      <div className='' >
        <p className='text-xs text-center text-gray-500'>
          By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Pathao and its affiliates to the number provided.
        </p>
      </div>
    </div>

  )
}

export default CaptainSignup