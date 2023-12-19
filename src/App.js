import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-cover bg-center h-full w-full" style={{ backgroundImage: 'url("")' }}>
      <Navbar/>

      <Hero/>

    </div>
  );
}

export default App;
