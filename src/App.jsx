
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarkes from './Components/BookMarks/BookMarkes'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks, SetBookMarks]=useState([])

  const handler=(blog)=>{
    console.log(blog)

    const newBookMarks=[...bookMarks, blog]
    SetBookMarks(newBookMarks)
  }

  const [readingTime, SetReadingTime]=useState([])

  const handelReadingTime=(time)=>{
    console.log(SetReadingTime)
    const newREadingTime= readingTime + time;
    SetReadingTime(newREadingTime)
  }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex'>
        <Blogs handler={handler} handelReadingTime={handelReadingTime}></Blogs>
        <BookMarkes bookMarks={bookMarks} readingTime={readingTime}></BookMarkes>
     </div>
      
    </>
  )
}

export default App
