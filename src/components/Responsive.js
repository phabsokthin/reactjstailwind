import React from 'react'

import Data from '../json/Data.json'

function Responsive() {
  return (
    <>
    
    <div className='container mx-auto'>
    {

      Data.map(post => {

        return(
          <>
          
          <div key={post.id}>
            <h1>{post.age}</h1>
            <h1>{post.name}</h1>
          </div>

          {post.famili && post.famili.map(parents => (

            <div key={parents.id}>
                <h3 className='text-red-500'>{parents.work}</h3>
                <h3 className='text-blue-600'>{parents.parent}</h3>

             
            </div>

          ))}
          
          </>
        )

        })

    }
    </div>
     
        <div className='container mx-auto'>
            <h3 className='sm:text-yellow-500  md:text-pink-500 lg:text-blue-500  xl:text-red-500  2xl:text-green-500 '>Hellos Everybody I really love you</h3>
        </div>
    
    </>
  )
}

function Res(){

  return(

    
    <>
    
    <Responsive/>
    
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>

        <div className='bg-red-500'>
            <h1>Hello boy</h1>
        </div>
        <div className='bg-blue-500'>
            <h1>Hello boy</h1>
        </div>
        <div className='bg-green-500'>
            <h1>Hello boy</h1>
        </div>
        <div className='bg-orange-500'>
            <h1>Hello boy</h1>
        </div>
        <div className='bg-orange-500'>
            <h1>Hello boy</h1>
        </div>
      </div>
    </div>

    <a href='/test'>Click Show</a>


    </>
  )

}

export default Res