import React from "react";

const Hero3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-[3rem]  md:ml-[7rem] md:mr-[7rem] md:p-[4rem]">
      <div className="flex items-center justify-center md:w-[220%]  ">
        <img
          src={require("./glowing orbits.jpg")}
          alt=""
          className="rounded-2xl shadow-lg h-auto w-auto"
        />
      </div>
      <div className="flex-bloc justify-center items-center m-[4rem]  ">
        <h1 className="font-bold text-[3rem] p-2">Cosmic Exploration</h1>
        <p className="p-2">
          Embark on a celestial journey with us as we delve into the mesmerizing
          tapestry of the cosmos. Our website is your portal to a universe of
          wonders, where the mysteries of space unfold in vivid detail. Explore
          the vastness of the cosmos through regularly updated articles and
          features that illuminate the secrets of astronomy, astrophysics, and
          the ever-evolving narratives of space exploration.
        </p>
        <p className="p-2">
          Explore the enigmatic beauty of distant galaxies, celestial bodies,
          and planets' dances, tracing their trajectories and understanding the
          complexities of quantum astrophysics.
        </p>
        <p className="p-2">
          Stay updated on space missions, celestial events, and human
          exploration. Join us in unraveling mysteries beyond Earth's
          boundaries, capturing the cosmos' essence, and sharing its
          awe-inspiring stories. Join our boundless exploration of the cosmos.
        </p>
      </div>
    </div>
  );
};

export default Hero3;
