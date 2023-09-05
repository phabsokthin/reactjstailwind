import React from 'react'

function ButtonHover() {
  return (
   <>
   
    <div className='container mx-auto'>
        <button className='bg-blue-500 p-2 text-white group-hover:text-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 ease-in'>Hover me!</button>
        <button className='bg-green-500 active:bg-yellow-500 focus:outline-one p-2 rounded-lg text-white hover:bg-orange-400 focus:ring-blue-500 focus:ring '>Save Data</button>

    </div>

   </>
  )
}

export default ButtonHover