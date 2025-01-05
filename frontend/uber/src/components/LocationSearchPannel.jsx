import React from 'react'

const LocationSearchPannel = ({ suggestions, setVehiclePanelOpen, setPanelOpen, setPickup, setDestination, activeField }) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        console.log("This is suggestion",suggestion.des)
        setPickup(suggestion.description)
    } else if (activeField === 'destination') {
        setDestination(suggestion.description)
    }
    // setVehiclePanelOpen(true)
    // setPanelOpen(false)
}
  return (
    <div className='transition-all duration-300 ease-in-out transform origin-top p-2'>
      {
        suggestions.map((suggestion, index) => {
          return( 
            <div key={index} onClick={()=>{handleSuggestionClick(suggestion)
            }} className='bg-white flex items-center gap-3 justify-start p-2 my-2 rounded-lg shadow-md  transition-all'>
            <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'>
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className='font-medium text-lg'>{suggestion.description}</h4>
          </div>
          )
        })
      }
    </div>
  )
}

export default LocationSearchPannel