import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center bg'>
         <section className="flex md:flex justify-center items-center m-[7rem] w-full ">
        <div className="text-center justify-center items-center">
         
          <h1 className="font-bold text-[4rem] text-white">
            Enter the Cosmos: Unveiling the Marvels of Space
          </h1>
          <p className="font-semibold text-[1rem] text-white">
            Embark on a cosmic odyssey with us as we unravel the mysteries and
            marvels of the universe. Join the journey where each discovery is a
            step into the infinite wonders of space, where the cosmos becomes
            our playground, and curiosity knows no bounds. Welcome to a
            celestial adventure beyond imagination.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={require("./pic1.jpg")}
            alt=""
            className="rounded-2xl h-auto max-w-[60%]"
          />
        </div>
      </section>
    </div>
  )
}

export default Hero