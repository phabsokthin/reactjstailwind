import React from 'react'

import { navigation } from './Data'
import './Nav.css'


const Nav = () => {
    return (
        <>

            <nav className='ml-[70px]'>
                <ul className='flex gap-x-[42px]'>

                    {navigation.map((item, index) => {

                        return (

                            <li key={index}>
                                <a href={item.href}  className='hover:text-blue-500 '>{item.name}</a>
                            </li>

                        )

                    })}

                </ul>
            </nav>

        </>
    )
}

export default Nav