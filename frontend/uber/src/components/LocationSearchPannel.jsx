import React from 'react'

const LocationSearchPannel = (props) => {
  console.log(props)
  // sample arrray of locations
  const locations = [
    'Thulo Padhero Marg, Dhapakhel, Lalitpur',
    'Bhaisepati, Lalitpur',
    'Balkumari, Lalitpur',
    'Chapagaun, Lalitpur',
  ]
  return (
    <div className='transition-all duration-300 ease-in-out transform origin-top p-2'>
      {
        locations.map((location, index) => {
          return( 
            <div key={index} onClick={()=>{props.setVehiclePannelOpen(true)
              props.setPannelOpen(false)
            }} className='bg-white flex items-center gap-3 justify-start p-2 my-2 rounded-lg shadow-md  transition-all'>
            <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'>
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className='font-medium text-lg'>{location}</h4>
          </div>
          )
          
})
      }
      {/* This is just a sample data */}
      

    </div>
      
  )
}

export default LocationSearchPannel