import React,{useState} from 'react'


import {BiMenu} from 'react-icons/bi'

import {navigation} from './Data'

const NavMobile = () => {

    const [isOpen, setIsOpen] = useState(false)


  return (
    <>
    
    <nav>
    
       <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'>

            <BiMenu/>

       </div>

       <ul className={`${isOpen ? 'max-h-60 p-8' : 'max-h-0 p-0'} flex flex-col lg:hidden
       absolute w-full bg-white top-24 left-0 shadow-md rounded-lg space-y-6 overflow-hidden transition-all`}>

        {navigation.map((item, index) => {

            return(

                <li key={index}>
                    <a href={item.href}>{item.name}</a>
                </li>
                

            )

        } )}

       </ul>

    </nav>
    
    </>
  )
}

export default NavMobile