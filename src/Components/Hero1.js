import React from "react";

const Hero1 = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center m-[5rem] gap-11">
      <div className=" ">
        <div className="flex justify-center items-center">
          <img
            src={require("./Space Astronaut Wallpaper 4K Ideas.jpg")}
            alt=""
            className="rounded-2xl w-[25rem] shadow-md  "
          />
        </div>
        <p className="p-3 w-full text-center">
          An inspirational website aims to motivate and uplift visitors by
          showcasing positive stories, achievements, or creative works.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <img
            src={require("./pic1.jpg")}
            alt=""
            className="rounded-2xl w-[25rem] shadow-md "
          />
        </div>
        <p className="p-3 w-full text-center">
          An inspirational website aims to motivate and uplift visitors by
          showcasing positive stories, achievements, or creative works.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <img
            src={require("./Galaxy.jpg")}
            alt=""
            className="rounded-2xl w-[25rem] shadow-md  "
          />
        </div>
        <p className="p-3 w-full text-center">
          An inspirational website aims to motivate and uplift visitors by
          showcasing positive stories, achievements, or creative works.
        </p>
      </div>
    </div>
  );
};

export default Hero1;
