import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const FinishRide = (props) => {
    const navigate = useNavigate()
    async function endRide(){
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/end-ride`,{
            
                rideId: props.ride._id
            
            
        },{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(response.status === 200){
            props.setFinishRideOpen(false)
            navigate('/captain-home')
        }
    }
    return (

        <div >
            <h5 className='p-1 text-center absolute top-0 w-[87%]' onClick={() => {
                props.setFinishRideOpen(false)
            }}> <i className="text-3xl ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mt-4 mb-3 text-center'>Ride Information</h3>
            <div className='flex items-center p-3 bg-yellow-400 rounded-lg justify-between mt-4'>
                <div className='flex items-center gap-1 '>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5feh6-WBnJMJzunv-DXyYf3BUFU5Yexv08g&s" alt="user_image" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullName.firstName + ' ' + props.ride?.user.fullName.lastName }</h2>
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


                    
                        <button onClick={endRide} className=' mt-3 w-full flex justify-center bg-green-600 text-white font-semibold p-3 px-8 border-2 border-green-500 rounded-xl active:border-black '>Finish Ride</button>
                        <p className='mt-3 text-xs text-gray-500 text-center '>Note: Click on Finish Ride button if you have completed the payment</p>
                    

                </div>
            </div>
        </div>

    )
}

export default FinishRide