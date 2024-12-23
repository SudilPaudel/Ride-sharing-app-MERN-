import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullNaMe: {
      firstName: firstName,
      lastName: lastName
      },
      email: email,
      password: password
    })
    console.log(userData)
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  
  }
  return (
  <div className='p-8 h-screen flex flex-col justify-between bg-[#dcdcdc] from-gray-100 to-gray-200'>
    <div className='max-w-lg mx-auto'>
      <img
        className='w-32 mx-auto mb-6'
        src={'/src/assets/logo.png'}
        alt="logo"
      />
      <h3 className='text-2xl font-bold text-center text-gray-800 mb-6'>Sign Up</h3>
      <form onSubmit={(e) => submitHandler(e)} className='space-y-6'>
        <div className='flex gap-4'>
          <div className='w-1/2'>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>First Name</h3>
            <input
              type="text"
              required
              className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='w-1/2'>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Last Name</h3>
            <input
              type="text"
              required
              className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
  
        <div>
          <h3 className='text-lg font-medium text-gray-700 mb-2'>Email Address</h3>
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
          <h3 className='text-lg font-medium text-gray-700 mb-2'>Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
            type="password"
            placeholder='Password'
          />
        </div>
  
        <button className='bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 w-full text-lg transition-all duration-200 hover:bg-blue-700'>
          Sign Up
        </button>
  
        <p className='text-center text-sm text-gray-600'>
          Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-700">LogIn Here</Link>
        </p>
      </form>
    </div>
  
    <div >
      <p className=' bg-[#dcdcdc] text-[10px] leading-tight text-center text-gray-600'>
        By proceeding, you consent to receive calls, WhatsApp, or SMS messages, including automated ones, from Pathao and its affiliates to the number provided.
      </p>
    </div>
  </div>
  
  )
}

export default UserSignup