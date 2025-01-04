
import React from 'react'

const RidePopup = (props) => {
  return (
    <div >
      <h5 className='p-1 text-center absolute top-0 w-[87%]' onClick={() => {
        props.setRidePopupOpen(false)
      }}> <i className="text-3xl ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-3 text-center'>New Ride Nearby:</h3>
      <div className='flex items-center p-3 bg-yellow-400 rounded-lg justify-between mt-4'>
        <div className='flex items-center gap-1 '>
        <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5feh6-WBnJMJzunv-DXyYf3BUFU5Yexv08g&s" alt="user_image" />
        <h2 className='text-lg font-medium'>Sudil Paudel</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 km</h5>
      </div>
      <div className='flex gap-2 items-center flex-col justify-between'>

        <div className='w-full mt-5'>
          <div className=' flex items-center justify-center gap-5 mb-3 p-2 border-b-2'>
            <i className="text-lg ri-map-pin-3-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>Thulo Padhero Marg</h3>
              <p className='text-sm text-gray-600'>Dhapakhel, Lalitpur</p>
            </div>
          </div>
          <div className=' flex items-center justify-center gap-5 mb-3 p-2 border-b-2'>
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>Samaj Dental Hospital</h3>
              <p className='text-sm text-gray-600'>New Baneshor, Kathmandu</p>
            </div>
          </div>
          <div className=' flex items-center justify-center gap-5 mb-3 p-2'>
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>रु 193</h3>
              <p className='text-sm text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
        <div className=' w-full flex items-center justify-between gap-6'>
        <button onClick={()=>{
          props.setConfirmRidePopupOpen(true)
          props.setRidePopupOpen(false)
          }} className='w-full mt-3 bg-green-600 text-white font-semibold p-3 px-8 border-2 border-green-500 rounded-xl active:border-black '>Accept</button>
          <button onClick={()=>{
          props.setRidePopupOpen(false)
          }} className='w-full mt-3 bg-gray-400 text-gray-700 font-semibold p-3 px-8 border-2 border-gray-500 rounded-xl active:border-black '>Ignore</button>
        </div>
      </div>
    </div>

  
  )
}

export default RidePopup