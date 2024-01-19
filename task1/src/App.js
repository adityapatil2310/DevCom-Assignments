import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Hobbies from "./Components/Hobbies";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route exact path="/" element={<About/>}></Route>
              <Route exact path="/hobbies" element={<Hobbies/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
