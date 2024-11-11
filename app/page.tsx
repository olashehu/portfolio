import AboutMe from "./ui/About";
import Contactme from "./ui/ContactMe";
import Experience from "./ui/Experience";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Herosection from "./ui/Herosection";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";
import Testimonial from "./ui/Testimonial";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Header />
        <Herosection />
        <Skills />
        <Experience />
        <AboutMe />
        <Projects />
        <Testimonial />
        <Contactme />
        <Footer />
      </div>
    </>
  );
}
