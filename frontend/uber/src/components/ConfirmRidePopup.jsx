import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopup = (props) => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const submitHandler = async(e) => {
        e.preventDefault()
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ride/start-ride`, {
           params: { 
            rideId: props.ride._id,
            otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        

        if(response.status === 200){
            props.setRidePopupOpen(false)
            props.setConfirmRidePopupOpen(false)
            navigate('/captain-riding', {state: {ride: props.ride}})
        }
    }
    return (
        <div >
            <h5 className='p-1 text-center absolute top-0 w-[87%]' onClick={() => {
                props.setConfirmRidePopupOpen(false)
            }}> <i className="text-3xl ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mt-4 mb-3 text-center'>Finish this Ride</h3>
            <div className='flex items-center p-3 bg-yellow-400 rounded-lg justify-between mt-4'>
                <div className='flex items-center gap-1 '>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5feh6-WBnJMJzunv-DXyYf3BUFU5Yexv08g&s" alt="user_image" />
                    <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullName.firstName + ' ' + props.ride?.user.fullName.lastName }</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 km</h5>
            </div>
            <div className='flex gap-2 items-center flex-col justify-between'>

                <div className='w-full mt-5'>
                    <div className=' flex items-center justify-center gap-5 mb-3 p-2 border-b-2'>
                        <i className="text-lg ri-map-pin-3-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.ride?.pickup}</h3>
                            <p className='text-sm text-gray-600'></p>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center gap-5 mb-3 p-2 border-b-2'>
                        <i className="text-lg ri-map-pin-range-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.ride?.destination}</h3>
                            <p className='text-sm text-gray-600'></p>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center gap-5 mb-3 p-2'>
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>रु{props.ride?.fare}</h3>
                            <p className='text-sm text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-1 w-full'>
                    <form onSubmit={submitHandler}>
                        <input value={otp} onChange={(e)=>{setOtp(e.target.value)}} className='bg-[#a19898] px-6 py-4 font-mono text-lg rounded-lg w-full placeholder:text-gray-700 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:shadow-xl'
                            type="text" placeholder='Enter OTP' />
                        <div className='flex items-center justify-between gap-6 mt-5'>
                        <button  className=' mt-3 bg-green-600 text-white font-semibold p-3 px-8 border-2 border-green-500 rounded-xl active:border-black '>Confirm</button>
                        <button onClick={() => {
                            props.setConfirmRidePopupOpen(false)
                        }} className=' mt-3 bg-red-500 text-white font-semibold p-3 px-8 border-2 border-red-500 rounded-xl active:border-black '>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopup