import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel';
import VehiclePannel from '../components/VehiclePannel';
import ConfirmedVehicle from '../components/ConfirmedVehicle';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [pannelOpen, setPannelOpen] = useState(false)
  const pannelRef = useRef(null)
  const pannelCloseRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false)
  const [confirmedVehiclePannelOpen, setConfirmedVehiclePannelOpen] = useState(false)
  const [lookingForDriverPannelOpen, setLookingForDriverPannelOpen] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const vehiclePannelRef = useRef(null)
  const confirmedVehiclePannelRef = useRef(null)
  const lookingForDriverPannelRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useGSAP(function () {
    if (pannelOpen) {
      gsap.to(pannelRef.current, {
        height: '70%',
        padding: 24,

      })
      gsap.to(pannelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(pannelRef.current, {
        height: '0%',
        padding: 0,

      })
      gsap.to(pannelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [pannelOpen])
  useGSAP(function () {
    if (vehiclePannelOpen) {
      gsap.to(vehiclePannelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePannelRef.current, {
        transform: 'translateY(130%)'
      })
    }
  }, [vehiclePannelOpen])
  useGSAP(function () {
    if (confirmedVehiclePannelOpen) {
      gsap.to(confirmedVehiclePannelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmedVehiclePannelRef.current, {
        transform: 'translateY(150%)'
      })
    }
  }, [confirmedVehiclePannelOpen])
  useGSAP(function () {
    if (lookingForDriverPannelOpen) {
      gsap.to(lookingForDriverPannelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(lookingForDriverPannelRef.current, {
        transform: 'translateY(150%)'
      })
    }
  }, [lookingForDriverPannelOpen])
  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(150%)'
      })
    }
  }, [waitingForDriver])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-8 top-7 z-10' src="https://logos-download.com/wp-content/uploads/2021/01/Pathao_Logo.png" alt="logo" />
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover object-center opacity-80 transition-all duration-300 ease-in-out hover:opacity-90' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
      </div>

      <div className='flex flex-col justify-end absolute top-0 h-screen w-full px-6'>
        <div className='h-[35%] bg-white bg-opacity-80 rounded-t-3xl shadow-xl p-8 relative'>
          <h5 ref={pannelCloseRef} onClick={() => { setPannelOpen(false) }} className='absolute opacity-0 right-6 top-6 text-2xl cursor-pointer transition-all duration-300 hover:opacity-100'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold text-gray-800 text-center tracking-wide mb-4'>Find a Trip</h4>
          <form onSubmit={(e) => { submitHandler(e) }} className="space-y-4">
            {/* <div className="line absolute h-12 w-1 top-[43%] left-9 bg-gray-800 rounded-full"></div> */}

            {/* Pickup Location Input */}
            <input
              onClick={() => setPannelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#F9F9F9] px-4 py-3 text-lg rounded-lg w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:shadow-xl'
              type="text"
              placeholder='Add a pickup location'
            />

            {/* Destination Input */}
            <input
              onClick={() => setPannelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#F9F9F9] px-4 py-3 text-lg rounded-lg w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:shadow-xl'
              type="text"
              placeholder='Enter your destination'
            />
          </form>
        </div>

        {/* Location Search Panel with Animation */}
        <div ref={pannelRef} className='bg-white bg-opacity-90 h-0 transition-all duration-500 ease-in-out transform origin-top rounded-b-3xl'>
          <LocationSearchPannel setPannelOpen={setPannelOpen} setVehiclePannelOpen={setVehiclePannelOpen} />
        </div>
        <div ref={vehiclePannelRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9  translate-y-full border-1 rounded-2xl shadow-md '>
          <VehiclePannel setConfirmedVehiclePannelOpen={setConfirmedVehiclePannelOpen} setVehiclePannelOpen={setVehiclePannelOpen} />
        </div>
        <div ref={confirmedVehiclePannelRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9  translate-y-full border-1 rounded-2xl shadow-md '>
          <ConfirmedVehicle setConfirmedVehiclePannelOpen={setConfirmedVehiclePannelOpen} setLookingForDriverPannelOpen={setLookingForDriverPannelOpen} setVehiclePannelOpen={setVehiclePannelOpen} />
        </div>
        <div ref={lookingForDriverPannelRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9  translate-y-full border-1 rounded-2xl shadow-md '>
          <LookingForDriver setLookingForDriverPannelOpen={setLookingForDriverPannelOpen} />
        </div>
        <div ref={waitingForDriverRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9  translate-y-full border-1 rounded-2xl shadow-md '>
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver} setLookingForDriverPannelOpen={setLookingForDriverPannelOpen} />
        </div>
      </div>
    </div>

  )
}

export default Home