import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="text-3xl font-bold underline bg-fixed" style={{ backgroundImage: 'url("https://i.ibb.co/KmwKk6W/Laptop-Background.png")', backgroundColor: '#0a192f' }}>
      <Navbar />
      <Home />     
      <About/>
      <Skills/>
     
    </div>
  )
}