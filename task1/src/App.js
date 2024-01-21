import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Hobbies from "./Components/Hobbies";
import Education from "./Components/Education";
import Coding from "./Components/Coding";
import Rubik from "./Components/Rubik";
import Basketball from "./Components/Basketball";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route exact path="/" element={<About/>}></Route>
              <Route exact path="/hobbies" element={<Hobbies/>}></Route>
              <Route exact path="/education" element={<Education/>}></Route>
              <Route exact path="/coding" element={<Coding/>}></Route>
              <Route exact path="/rubik" element={<Rubik/>}></Route>
              <Route exact path="/basketball" element={<Basketball/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
