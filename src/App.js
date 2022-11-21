import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Social from "./components/Social/Social";
import About from "./containers/About/About";
import Skils from "./containers/Skills/Skills";
import Experience from "./containers/Experience/Experience";
import Project from "./containers/Project/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skils />
      <Experience />
      <Project />
      <Social />
    </div>
  );
}

export default App;
