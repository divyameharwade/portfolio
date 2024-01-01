import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">

      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
