import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Social from "./components/Social/Social";
import About from "./containers/About/About";
import Skils from "./containers/Skills/Skills";
import Experience from "./containers/Experience/Experience";
import Contact from "./containers/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skils />
      <Experience />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
