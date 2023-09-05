import React from 'react'

import burger from '../image/burger.jpg';

function Tailwind1() {
  return (
    <>
    

    <div className='container mx-auto '>
        <div className='flex items-center justify-center hover:bg-red-500 transition duration-300 ease-in shadow  my-5  border-t-2 border-orange-400 w-32 h-32'>
        <h3 className=''>Hello world</h3>
        </div>

        <div className='border border-2 border-red-500 w-32 h-32 flex items-center justify-center relative'>
           <h3 className=''>Hello world</h3>

           <div className='absolute bottom-0 left-0 bg-orange-500'>
                <p>Buy me now</p>
           </div>
          
        </div>
        <div className='w-full h-full border border-red-400 overflow-hidden'>
                <img style={{width:"300px"}} src={burger}/>
           </div>
    </div>
    
    </>
  )
}

export default Tailwind1