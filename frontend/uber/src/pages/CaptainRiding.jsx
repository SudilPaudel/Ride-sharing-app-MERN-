import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from './FinishRide'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = (props) => {
const location = useLocation()
const [finishRideOpen, setFinishRideOpen] = useState(false)
const FinishRideRef = useRef(null)
const rideData = location.state?.ride

    useGSAP(function () {
        if (finishRideOpen) {
            gsap.to(FinishRideRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(FinishRideRef.current, {
                transform: 'translateY(150%)'
            })
        }
    }, [finishRideOpen])
    return (
        <div>
            <div className='h-screen'>

                <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
                    <img className='w-16 ' src="https://logos-download.com/wp-content/uploads/2021/01/Pathao_Logo.png" alt="logo" />
                    <Link to={'/home'} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                        <i className="text-lg font-medium ri-logout-box-r-line"></i>
                    </Link>
                </div>
                <div className='h-4/5'>

                    <LiveTracking />
                </div>
                <div className='h-1/5 p-3 border-t-2 flex items-center justify-between relative gap-3 bg-yellow-400 border-gray-300 rounded-t-3xl shadow-xl' >
                    <h5 className='p-1 text-center absolute top-0 w-[97%]' onClick={() => {
                        setFinishRideOpen(true)
                    }}> <i className="text-3xl ri-arrow-up-wide-line"></i></h5>
                    <h4 className='text-xl font-semibold'>4Kms Away</h4>
                    <button className=' mt-3 bg-green-500 text-white font-semibold p-2 px-8 border-2 border-green-500 rounded-xl active:border-black ' onClick={() => {
                        setFinishRideOpen(true)
                    }}>Comlplete this Ride</button>
                </div>
                <div ref={FinishRideRef} className='fixed bg-white w-full z-10 bottom-0 px-3 py-10 pt-12 translate-y-full   border-1 rounded-t-2xl shadow-md '>
                    <FinishRide ride={rideData} setFinishRideOpen={setFinishRideOpen} />
                </div>

            </div>
        </div>
    )
}

export default CaptainRiding