import React from "react";

const Hero3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-[3rem]  md:ml-[7rem] md:mr-[7rem] md:p-[4rem]">
    
      <div className="flex items-center justify-center  ">
        <img
          src={require("./mars planet astronaut.jpg")}
          alt=""
          className="rounded-2xl "
        />
     
      </div>
      <div className="flex justify-center items-center m-[4rem] ">
        <p>
          Immerse yourself in a universe of knowledge with our often updated
          content covering a wide range of topics in astronomy, astrophysics,
          space missions, and celestial events. Our team of dedicated writers
          and professionals curates intriguing material for both seasoned space
          enthusiasts and interested newcomers. Discover the most recent
          advances in astrophysics, solve the riddles of distant galaxies, and
          learn about planned space missions that will push the boundaries of
          human discovery. Explore the complexities of celestial occurrences,
          from meteor showers to eclipses, as we take you through the night
          sky's wonders. Our commitment is to present you with informative,
          well-researched, and easily available content that not only informs
          but also inspires awe and fascination.
        </p>
      </div>
    </div>
  );
};

export default Hero3;
