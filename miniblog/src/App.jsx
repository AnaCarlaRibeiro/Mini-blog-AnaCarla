import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/fotter/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />

          </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
