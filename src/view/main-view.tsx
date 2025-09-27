import About from "../components./feature/about";
import Hero from "../components./feature/hero";
import PricingPackages from "../components./feature/pricing-packages";
import ProjectShowcase from "../components./feature/project-showcase";
import Services from "../components./feature/services";
import Team from "../components./feature/team";
import Testimonials from "../components./feature/testimonials";

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
    </main>
  );
};

export default MainView;
