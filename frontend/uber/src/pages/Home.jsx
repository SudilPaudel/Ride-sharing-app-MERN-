import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [pannelOpen, setPannelOpen] = useState(false)
  const pannelRef = useRef(null)
  const pannelCloseRef = useRef(null)
  const [vehiclePannelOpen, setVehiclePannelOpen] = useState(false)
  const vehiclePannelRef = useRef(null)
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
    if(vehiclePannelOpen){
      gsap.to(vehiclePannelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePannelRef.current,{
        transform:'translateY(100%)'
      })
    }
  }, [vehiclePannelOpen])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5 z-10' src="https://logos-download.com/wp-content/uploads/2021/01/Pathao_Logo.png" alt="logo" />
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover object-center opacity-80 transi</div>tion-all duration-300 ease-in-out hover:opacity-90' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
      </div>

      <div  className='flex flex-col justify-end absolute top-0 h-screen w-full px-6'>
        <div className='h-[35%] bg-white bg-opacity-80 rounded-t-3xl shadow-xl p-8 relative'>
          <h5 ref={pannelCloseRef} onClick={() => { setPannelOpen(false) }} className='absolute opacity-0 right-6 top-6 text-2xl cursor-pointer transition-all duration-300 hover:opacity-100'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold text-gray-800 tracking-wide mb-4'>Find a Trip</h4>
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
          <LocationSearchPannel setPannelOpen={setPannelOpen}  setVehiclePannelOpen={setVehiclePannelOpen} />
        </div>
        <div ref={vehiclePannelRef} className='fixed bg-white mr-6 z-10 bottom-0 p-8 translate-y-full borrder-1 rounded-2xl shadow-md '>
          <h5 className='p-3 text-center absolute top-0 w-[87%]'> <i className="text-2xl ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-3 '>Choose Your Ride</h3>
          <div className='bg-white p-3 rounded-xl border-2 active:border-black mb-2 shadow-md flex items-center justify-between gap-4'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="uber_car" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-sm mb-1'>Car <span><i className="ri-user-2-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm mb-1'>2 mins away</h5>
              <p className='font-medium text-sm mb-1'>Affordable Compact Rides</p>

            </div>
            <h2 className='text-xl font-semibold'>Rs 193</h2>
          </div>

          <div className='bg-white p-3 rounded-xl border-2 active:border-black  mb-2 shadow-md flex items-center justify-between gap-4'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png" alt="uber_bike" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-sm mb-1'>Bike <span><i className="ri-user-2-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm mb-1'>2 mins away</h5>
              <p className='font-medium text-sm mb-1'>Affordable Motorbike Rides</p>

            </div>
            <h2 className='text-xl font-semibold'>Rs 80</h2>
          </div>

          <div className='bg-white p-3 rounded-xl border-2 active:border-black  mb-2 shadow-md flex items-center justify-between gap-4'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="uber_bike" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-sm mb-1'> Auto <span><i className="ri-user-2-fill"></i>2</span></h4>
              <h5 className='font-medium text-sm mb-1'>2 mins away</h5>
              <p className='font-medium text-sm mb-1'>Affordable Auto Rides</p>

            </div>
            <h2 className='text-xl font-semibold'>Rs 50</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home