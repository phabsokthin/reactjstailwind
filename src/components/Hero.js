import React from 'react'

import burger from '../image/burger.jpg'
import Header from './Header'


const Hero = () => {
  return (
    <>
    
    <section className='pt-9' >

        <div className='container mx-auto'>
            <div className=''>

          
       

            </div>
           
            <div className='p-3'>
                <div>
                    <h1 className='h1 mb-3 lg:mb-[22px] mt-5'> Yoga to <br/> Release state</h1>
                    <p className='mb-6 lg:mb-12 mx-w-[480px] lg:text-lg'>Yuga is away of life, rather than a chore
                        Coounter the stressed lift by becoming more min fuil

                    </p>
                    <div>
                        <button className='btn btn-sm lg:btn-lg bg-orange-400'>btn 1</button>
                        <button>btn 2</button>


                    </div>
                    <div>
                        <img src={burger}/>
                    </div>
                    <div>
                        <img src={burger}/>
                    </div>
                    <div>
                        <img src={burger}/>
                    </div>
                    <div>
                        <img src={burger}/>
                    </div>
                </div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Hero