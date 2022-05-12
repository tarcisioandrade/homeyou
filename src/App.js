import "./assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Header";
import { useState } from "react";
import Intro from "./components/Intro";
import Galery from "./components/Galery";
import Budget from "./components/Budget";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar active={active} setActive={handleClick} />
        <Intro />
        <Galery />
        <Budget />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
