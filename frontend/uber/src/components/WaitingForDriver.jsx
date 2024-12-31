import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <div>
        <h5 className='p-1 text-center absolute top-0 w-[87%]' onClick={() => {
          props.setWaitingForDriver(false)
        }}> <i className="text-3xl ri-arrow-down-wide-line"></i></h5>
        <div className='flex items-center justify-between'>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="car_search" />
          <div className='text-right '>
            <h2 className='text-lg font-medium '>Sudil</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>BA 2 Pa 2178</h4>
            <p className='text-sm text-gray-600'>Deepal S07</p>
          </div>
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


        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver