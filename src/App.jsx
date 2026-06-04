import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testomonial";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CaseStudies/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
