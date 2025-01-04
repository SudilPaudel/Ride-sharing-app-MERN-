import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center justify-start gap-4 '>
            <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5feh6-WBnJMJzunv-DXyYf3BUFU5Yexv08g&s" alt="user_image" />
            <h4 className='text-lg font-medium'>Sudiksha Paudel</h4>
          </div>
          <div>
            <h5 className='text-xl font-semibold'>Rs. 193.2</h5>
            <p className='text-xl text-right font-medium text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
          <div className='text-center'>
          <i className="text-2xl font-thin ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm font-base text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
          <i className="text-2xl font-thin ri-speed-up-line"></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm font-base text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
          <i className="text-2xl font-thin ri-booklet-line"></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm font-base text-gray-600'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails