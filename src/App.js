import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
