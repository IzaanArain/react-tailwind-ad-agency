import About from "../components./feature/home/about";
import ContactSection from "../components./feature/home/contact";
import Faqs from "../components./feature/home/faqs";
import Hero from "../components./feature/home/hero";
import PricingPackages from "../components./feature/home/pricing-packages";
import ProjectShowcase from "../components./feature/home/project-showcase";
import Services from "../components./feature/home/services";
import Team from "../components./feature/home/team";
import Testimonials from "../components./feature/home/testimonials";

const MainView = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <PricingPackages />
      <Team />
      <Testimonials />
      <Faqs />
      <ContactSection />
    </main>
  );
};

export default MainView;
