import React, { useState, useEffect } from 'react'


import Nav from './Nav'
import NavMobile from './NavMobile'
import logo from '../image/logo512.png'


const Header = () => {

    const [header, setHeader] = useState(false)

    useEffect(() => {

        window.addEventListener('scroll', () => {
            window.scrollY > 36 ? setHeader(true) : setHeader(false)
        })

    })

    return (
        <>
            <div className='container mx-auto '>
                <div>
                <header className={ `${header ? 'top-0' : 'top-9'} max-w-[90vw] w-full  bg-white  fixed  sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]  xl:max-w-[1280px] 2xl:max-w[1536px]  
    rounded-lg h-[90px] shadow-md px-4
      z-50 transition-all duration-500 flex items-center justify-between sm:ml-[0px] md:ml-[0px] lg:ml-[0px] xl:ml-[0px] 2xl:ml-[0px]  ml-6`}  >

                        <div className='flex items-center'>

                            <a href='#'>
                                <img src={logo} style={{ width: "50px" }} />
                            </a>

                            <div className='hidden lg:flex '>
                                <Nav />
                            </div>

                        </div>

                        <div className='flex items-center'>
                            <div className='flex gap-x-4 lg:gap-x-9'>
                                <button className='text-heading font-medium text-sm
                                     lg-text-base hover:text-orange-500 transition'>Sign in</button>
                                <button className='bg-gray-200 p-3 lg:px-[30px] hover:bg-orange-600 hover:text-white transition  border border-orange-400 text-orange rounded-md font-medium text-sm'>Sign up</button>
                            </div>
                            <NavMobile />
                        </div>

                    </header>

                </div>
            </div>
        </>
    )
}

export default Header