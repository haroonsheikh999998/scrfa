
import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
       <Navbar />
       <Home />
       <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
