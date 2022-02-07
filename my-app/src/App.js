import style from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";

function App() {
  let componentRender = useSelector((state) => state.componentRender);

  return (
    <div className={style.app__container_main}>
      <Navigation />
      {componentRender === "home" ? (
        <Home />
      ) : componentRender === "about" ? (
        <About />
      ) : componentRender === "projects" ? (
        <Projects />
      ) : (
        <Contact />
      )}
      <Footer />
    </div>
  );
}

export default App;
