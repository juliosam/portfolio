import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import Skills from "./skills";
import Footer from "./components/footer";
import Contact from "./contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/skills" element={<Skills/>}/>
       <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
