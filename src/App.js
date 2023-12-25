import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import Footer from "./Components/Footer";
import Hero2 from "./Components/Hero2";
import Hero3 from "./Components/Hero3";

function App() {
  return (
    <div className="bg-cover bg-center h-full w-full font-light ">
      <Navbar />
      <div>
        <Hero />
        <Hero3/>
        {/* <hr class="hidden my-6 border-gray-600 md:w-[40%] md:sm:mx-auto dark:border-gray-700 lg:my-8"/> */}
        <Hero2/>

        {/* <hr class="hidden my-6 border-gray-600 md:w-[40%] sm:mx-auto dark:border-gray-700 lg:my-8"/> */}
       
        <Hero1 />
       
      </div>

      <Footer />
    </div>
  );
}

export default App;
