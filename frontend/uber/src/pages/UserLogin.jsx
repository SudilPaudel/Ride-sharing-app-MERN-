
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        setUserData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-8 h-screen flex flex-col justify-between bg-[#dcdcdc] from-gray-100 to-gray-200'>
            <div className='max-w-lg mx-auto'>
                <img
                    className='w-36 mx-auto mb-6'
                    src={'/src/assets/logo.png'}
                    alt="logo"
                />
                <h3 className='text-2xl font-bold text-center text-gray-800 mb-6'>Log In</h3>
                <form onSubmit={(e) => submitHandler(e)} className='space-y-6'>
                    <div>
                        <h3 className='text-lg font-medium text-gray-700 mb-2'>What's your email?</h3>
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
                        <h3 className='text-lg font-medium text-gray-700 mb-2'>What's your password?</h3>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-white w-full rounded-lg px-4 py-3 border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-500'
                            type="password"
                            placeholder='password'
                        />
                    </div>

                    <button className='bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 w-full text-lg transition-all duration-200 hover:bg-blue-700'>
                        Log In
                    </button>

                    <p className='text-center text-sm text-gray-600'>
                        New Here? <Link to="/signup" className="text-blue-600 hover:text-blue-700">Create new Account</Link>
                    </p>
                </form>
            </div>

            <div>
                <Link to='/captain-login' className='bg-green-500 flex items-center justify-center text-white font-semibold rounded-lg px-4 py-3 w-full text-lg transition-all duration-200 hover:bg-green-600'>
                    Log In as Captain
                </Link>
            </div>
        </div>

    )
}

export default UserLogin