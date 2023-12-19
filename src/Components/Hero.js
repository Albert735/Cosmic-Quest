import React from "react";

const Hero = () => {
  return (
    <div className="">
      <section
        className="w-full h-[40rem] "
        style={{ backgroundImage: 'url("./nightsky.jpg")' }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center md:ml-[7rem] md:mr-[3rem] gap-7">
          <div>
            <h1 className="font-bold text-[4rem] text-white justify-center items-center ">
              Enter the Cosmos: Unveiling the Marvels of Space
            </h1>
            <p className="font-semibold text-[1rem] text-white ">
              Embark on a cosmic odyssey with us as we unravel the mysteries and
              marvels of the universe. Join the journey where each discovery is
              a step into the infinite wonders of space, where the cosmos
              becomes our playground, and curiosity knows no bounds. Welcome to
              a celestial adventure beyond imagination.
            </p>
          </div>

          <div className="">
            <img
              src={require("./mars planet astronaut.jpg")}
              alt=""
              className="rounded-2xl h-auto max-w-[60%]"
            />
          </div>
        </div>
      </section>

      {/* <section>
        <div className="">
          <img
            src={require("./pic1.jpg")}
            alt=""
            className="rounded-2xl h-auto max-w-[60%]"
          />
        </div> 

      </section> */}
    </div>
  );
};

export default Hero;
