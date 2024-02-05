import { useState, useRef } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import AboutProject from "./components/AboutProject";

function App() {
  const [page, setPage] = useState("Home");
  const [theme, setTheme] = useState("");
  const mainRef = useRef(null);

  const handleTheme = (selectedTheme) => {
    if (selectedTheme === "dark") {
      setTheme(selectedTheme);
    } else {
      setTheme("");
    }
  };

  return (
    <div className={`app-container ${theme}`}>
      <Header setPage={setPage} onThemeSelection={handleTheme}></Header>
      <main id="main" className="main" ref={mainRef}>
        {page === "Home" && <Home></Home>}
        {page === "Projects" && <Projects setPage={setPage}></Projects>}
        {page === "About Project" && <AboutProject />}
        {page === "Experience" && <Experience />}
        {page === "Education" && <Education></Education>}
        {page === "Contact" && <Contact mainRef={mainRef}></Contact>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
