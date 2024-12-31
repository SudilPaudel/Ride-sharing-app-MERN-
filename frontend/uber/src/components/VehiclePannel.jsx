import React from 'react'

const VehiclePannel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center absolute top-0 w-[87%]' onClick={()=>{
            props.setVehiclePannelOpen(false)
          }}> <i className="text-3xl ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-3 text-center '>Choose Your Ride</h3>

          <div onClick={()=>{
            props.setConfirmedVehiclePannelOpen(true)
            props.setVehiclePannelOpen(false)
            }} className='bg-white p-3 rounded-xl border-2 active:border-black mb-2 shadow-md flex items-center justify-between gap-4'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="uber_car" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-sm mb-1'>Car <span><i className="ri-user-2-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm mb-1'>2 mins away</h5>
              <p className='font-medium text-sm mb-1'>Affordable Compact Rides</p>

            </div>
            <h2 className='text-xl font-semibold'>Rs 193</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmedVehiclePannelOpen(true)
            props.setVehiclePannelOpen(false)
            }} className='bg-white p-3 rounded-xl border-2 active:border-black  mb-2 shadow-md flex items-center justify-between gap-4'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1571927853/assets/39/c1c2c7-61eb-4432-9bac-728b974207e7/original/cityscoot-icon-mobile.png" alt="uber_bike" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-sm mb-1'>Bike <span><i className="ri-user-2-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm mb-1'>2 mins away</h5>
              <p className='font-medium text-sm mb-1'>Affordable Motorbike Rides</p>

            </div>
            <h2 className='text-xl font-semibold'>Rs 80</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmedVehiclePannelOpen(true)
            props.setVehiclePannelOpen(false)
          }} className='bg-white p-3 rounded-xl border-2 active:border-black  mb-2 shadow-md flex items-center justify-between gap-4'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="uber_bike" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-sm mb-1'> Auto <span><i className="ri-user-2-fill"></i>2</span></h4>
              <h5 className='font-medium text-sm mb-1'>2 mins away</h5>
              <p className='font-medium text-sm mb-1'>Affordable Auto Rides</p>

            </div>
            <h2 className='text-xl font-semibold'>Rs 50</h2>
          </div>

          <button onClick={()=>{
          props.setVehiclePannelOpen(false)

          }} className='w-full mt-3 bg-red-600 text-white font-semibold p-1.5 border-2 border-red-500 rounded-xl active:border-black '>Cancel</button>
    </div>
  )
}

export default VehiclePannel