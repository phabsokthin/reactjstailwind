import React, { useState } from 'react'
import Bloglist from './Bloglist'
import Data from '../json/Data.json'
import image from '../image/Paid.png'

function Home() {

    const  [blogs, setBlog] = useState([

        {title: "my Name", body: "Lorm ipsum...", author: "Mario", id: 1},
        {title: "my Name", body: "Lorm ipsum...", author: "Mario", id: 2},
        {title: "my Name", body: "Lorm ipsum...", author: "Mario", id: 3},

    ])
    const [colors, setColors] = useState([

        {names: "blue", Model: "Good fd", id: 2}
    ])
    
    const [titles, setTitle] = useState("Hello world")

  return (
    <div>

        <div className='home'>

            <img src={image} style={{width: "100px"}} />

            <Bloglist titles={titles} tit="I love yous"/>

                {blogs.map((blog) => (

                    <div className="blog" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h2>I am {blog.author}</h2>
                    </div>

                ))}

        </div>

        <div className='title'>
            
            {colors.map((color) => (

                <div key={color.id}>
                    <p>color{color.names}</p>
                    <p>{color.Model}</p>
                </div>

            ))}

        </div>

        {
            Data.map(post => {

                return(
                    <div key={post.id}>

                            <p>{post.age}</p>
                            <p>{post.pob}</p>

                            {post.famili && post.famili.map(family =>(

                                <div key={family.id}>

                                    <p>I am {family.work}</p>
                                    <p>My parent are {family.parent}</p>

                                </div>

                            ))}

                    </div>

                )

            })
        }

        <div className='title'>

            {colors.map((color) =>(

                <div key={color.id}>

                    <p className='text-blue-600'>{color.names}</p>

                </div>

            ))}

        </div>

    </div>
  )
}

export default Home