import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center xl:flex-row h-[60rem] xl:h-[40rem]"
      style={{ backgroundImage: 'url("./nightsky.jpg")' }}
    >
      <div className="flex flex-col flex-1 items-center xl:items-start justify-center text-start m-[3rem]">
        <h1 className="font-bold text-[4rem] text-white justify-center items-center ">
          Enter the Cosmos: Unveiling the Marvels of Space
        </h1>
        <p className="font-semibold text-[1rem] text-white ">
          Embark on a cosmic odyssey with us as we unravel the mysteries and
          marvels of the universe. Join the journey where each discovery is a
          step into the infinite wonders of space, where the cosmos becomes our
          playground, and curiosity knows no bounds. Welcome to a celestial
          adventure beyond imagination.
        </p>
      </div>

      <div className="flex items-center justify-center flex-1 w-full  xl:w-auto ">
        <img
          src={require("./mars planet astronaut.jpg")}
          alt=""
          className="rounded-2xl max-w-[60%]"
        />
      </div>
    </div>
  );
};

export default Hero;
