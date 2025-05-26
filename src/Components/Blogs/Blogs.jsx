import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handler,handelReadingTime}) => {
    const [blog, setBlog]=useState([])

    useEffect(()=>{
        fetch('/public/blogs.json')
        .then(Response=>Response.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-3xl">User:{blog.length}</h1> */}

            <div className="m-5 ">
                {
                blog.map(blog=><Blog 
                    key={blog.id}
                    blog={blog}
                    handler={handler}
                    handelReadingTime={handelReadingTime}
                    ></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;