import React from 'react'
import homevideo from "../assets/homevideo.mp4"
const Home = () => {
  return (
    <>
      <div className='h-screen relative'>
        <video src={homevideo}
          autoPlay
          muted
          loop
          playsInline
          className=' absolute h-full w-full object-cover '></video>
        <div className='relative z-10 flex center justify-center items-center text-white '>
          <div>

            {/* <h1 className='font-2xl'>Smart Living Hub</h1> */}
            <h1 className="text-4xl md:text-6xl font-bold">Smart Living Hub</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et consequatur dolore, deleniti quam voluptatibus soluta aliquam expedita temporibus consequuntur quisquam tempore cupiditate! Voluptas aliquam facilis nemo tempore veritatis. Blanditiis!</p>

          </div>

        </div>
      </div>
    </>
  )
}

export default Home