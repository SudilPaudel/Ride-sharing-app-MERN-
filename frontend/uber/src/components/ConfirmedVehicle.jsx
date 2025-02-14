import React from 'react'

const ConfirmedVehicle = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute top-0 w-[87%]' onClick={() => {
        props.setConfirmedVehiclePannelOpen(false)
      }}> <i className="text-3xl ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-3 text-center'>Confirm Your Ride</h3>
      <div className='flex gap-2 items-center flex-col justify-between'>
        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="car_search" />

        <div className='w-full mt-5'>
          <div className=' flex items-center justify-center gap-5 mb-3 p-2 border-b-2'>
            <i className="text-lg ri-map-pin-3-fill"></i>
            <div>
              {/* <h3 className='text-lg font-medium'>Thulo Padhero Marg</h3> */}
              <p className='text-sm text-gray-600 text-center'>{props.pickup}</p>
            </div>
          </div>
          <div className=' flex items-center justify-center gap-5 mb-3 p-2 border-b-2'>
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              {/* <h3 className='text-lg font-medium'>Samaj Dental Hospital</h3> */}
              <p className='text-sm text-gray-600 text-center'>{props.destination}</p>
            </div>
          </div>
          <div className=' flex items-center justify-center gap-5 mb-3 p-2'>
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium text-center'>रू{props.fare[props.vehicleType]}</h3>
              {/* <p className='text-sm text-gray-600'>Cash Cash</p> */}
            </div>
          </div>
        </div>
        <button onClick={()=>{
          props.setLookingForDriverPannelOpen(true)
          props.setConfirmedVehiclePannelOpen(false)
          props.setVehiclePannelOpen(false)
          props.createRide()
          }} className='w-full mt-3 bg-green-600 text-white font-semibold p-1.5 border-2 border-green-500 rounded-xl active:border-black '>Confirm</button>
          <button onClick={()=>{
          props.setConfirmedVehiclePannelOpen(false)
          }} className='w-full mt-3 bg-red-600 text-white font-semibold p-1.5 border-2 border-red-500 rounded-xl active:border-black '>Cancel</button>
      </div>
    </div>
  )
}

export default ConfirmedVehicle