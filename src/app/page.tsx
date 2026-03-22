import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ForwardDeployment from "@/components/ForwardDeployment";
import ROI from "@/components/ROI";
import BusinessOwners from "@/components/BusinessOwners";
import Portfolio from "@/components/Portfolio";
import WhyMe from "@/components/WhyMe";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ForwardDeployment />
      <ROI />
      <BusinessOwners />
      <Portfolio />
      <WhyMe />
      <Process />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
