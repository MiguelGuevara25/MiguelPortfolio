import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import AboutMe from "./AboutMe";

const PrincipalPage = () => {
  return (
    <div className="animationPage overflow-x-hidden">
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default PrincipalPage;
