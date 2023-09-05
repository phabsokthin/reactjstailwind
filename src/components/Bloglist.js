import React, { useState } from 'react'

function Bloglist({tit, titles}) {

    // const conent = props.tit

    const [navs, setNave] = useState([
      
      {titles: "Navigation", model: "Responsive", id: 2}

    ])


  return (
   <>

   {navs.map((blog) => (

      <div key={blog.id}>
        
        <h2>{blog.titles}</h2>
        <h3>{blog.model}</h3>

      </div>

   ))}
   
    <div className='text-red-500'>{tit}</div>
    <p className='text-orange-400'>{titles}</p>

   
   </>
  )
}

export default Bloglist