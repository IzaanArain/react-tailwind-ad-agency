import { PACKAGES } from "../../../../constants";
import Package from "./package";

const PricingPackages = () => {
  return (
    <section id="pricing" className="bg-stone-50 px-4 py-12 md:px-8">
      <header>
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
          Pricing
        </h2>
        <p className="mb-4 text-center text-3xl tracking-tighter md:text-5xl">
          Advertising packages
        </p>
      </header>
      <div className="flex flex-col items-center space-y-8">
        {PACKAGES.map((pkg) => (
          <Package key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </section>
  );
};

export default PricingPackages;
