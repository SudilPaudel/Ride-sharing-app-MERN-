import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel';
import VehiclePannel from '../components/VehiclePannel';
import ConfirmedVehicle from '../components/ConfirmedVehicle';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { SocketContext } from '../context/SocketContext';

import { UserDataContext } from '../context/userContext';
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
  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [activeField, setActiveField] = useState(null)
  const [fare, setFare] = useState({})
  const [vehicleType, setVehicleType] = useState(null)
  const vehiclePannelRef = useRef(null)
  const confirmedVehiclePannelRef = useRef(null)
  const lookingForDriverPannelRef = useRef(null)

  const {socket} = useContext(SocketContext)
  const {user} = useContext(UserDataContext)
  
  useEffect(()=>{
    socket.emit("join", { userType: "user", userId: user._id })
  }, [user])

  const handlePickupChange = async (e) => {
    console.log(pickup)
    setPickup(e.target.value)
    
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        setPickupSuggestions(response.data)
    } catch {
        // handle error
    }
}

const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
        
    } catch {
        // handle error
    }
}
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
        transform: 'translateY(170%)'
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
  async function findTrip() {
    setVehiclePannelOpen(true)
    setPannelOpen(false)
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ride/get-fare`,{
      params:{pickup, destination},
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setFare(response.data)
  }
  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/create`,{
      pickup,
      destination,
      vehicleType,
    },{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data)
  }
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
              onClick={() => {setPannelOpen(true)
                setActiveField('pickup')
              }}
              value={pickup}
              onChange={handlePickupChange}
              className='bg-[#F9F9F9] px-4 py-3 text-lg rounded-lg w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:shadow-xl'
              type="text"
              placeholder='Add a pickup location'
            />

            {/* Destination Input */}
            <input
               onClick={() => {setPannelOpen(true)
                setActiveField('destination')
              }}
              value={destination}
              onChange={handleDestinationChange}
              className='bg-[#F9F9F9] px-4 py-3 text-lg rounded-lg w-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:shadow-xl'
              type="text"
              placeholder='Enter your destination'
            />
          </form>
          <button onClick={findTrip} className='bg-black text-white px-3 py-1 w-full rounded-lg mt-2'>Find Trip</button>
        </div>

        {/* Location Search Panel with Animation */}
        <div ref={pannelRef} className='bg-white bg-opacity-90 h-0 transition-all duration-500 ease-in-out  origin-top rounded-b-3xl'>
          <LocationSearchPannel 
          suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
          setPanelOpen={setPannelOpen}
          setVehiclePanelOpen={setVehiclePannelOpen}
          setPickup={setPickup}
          setDestination={setDestination}
          activeField={activeField}
          />
        </div>
        <div ref={vehiclePannelRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9  translate-y-full border-1 rounded-2xl shadow-md '>
          <VehiclePannel setVehicleType={setVehicleType} fare={fare} setConfirmedVehiclePannelOpen={setConfirmedVehiclePannelOpen} setVehiclePannelOpen={setVehiclePannelOpen} />
        </div>
        <div ref={confirmedVehiclePannelRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9  translate-y-full border-1 rounded-2xl shadow-md '>
          <ConfirmedVehicle vehicleType={vehicleType} pickup={pickup} destination={destination} fare={fare} createRide={createRide} setConfirmedVehiclePannelOpen={setConfirmedVehiclePannelOpen} setLookingForDriverPannelOpen={setLookingForDriverPannelOpen} setVehiclePannelOpen={setVehiclePannelOpen} />
        </div>
        <div ref={lookingForDriverPannelRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9  translate-y-full border-1 rounded-2xl shadow-md '>
          <LookingForDriver pickup={pickup} destination={destination} vehicleType={vehicleType} fare={fare} setLookingForDriverPannelOpen={setLookingForDriverPannelOpen} />
        </div>
        <div ref={waitingForDriverRef} className='fixed bg-white mr-6 z-10 bottom-0 p-9  translate-y-full border-1 rounded-2xl shadow-md '>
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver} setLookingForDriverPannelOpen={setLookingForDriverPannelOpen} />
        </div>
      </div>
    </div>

  )
}

export default Home