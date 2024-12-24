import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <>
      <div className='h-screen flex flex-col justify-between w-full bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
        <img className='w-36 mx-2' src={'/src/assets/logo.png'} alt="Pathao Logo" />
        <div className='bg-white bg-opacity-75 py-8 px-6 rounded-t-3xl shadow-lg'>
          <h1 className='text-4xl font-extrabold text-gray-800 text-center mb-6'>
            Get Started with Pathao
          </h1>
          <p className='text-xl text-gray-600 text-center mb-8'>
            Get to your destination fast with Pathao's reliable, safe, and affordable rides.
          </p>
          <Link
            to='/login'
            className='flex items-center justify-center w-full bg-black text-white py-4 rounded-lg mt-4 transition-transform transform hover:scale-105 hover:shadow-lg'>
            Continue
          </Link>
        </div>
      </div>

    </>
  )
}

export default GetStarted