import { IoArrowForward } from "react-icons/io5";

interface IPackage {
  name: string;
  price: string;
  description: string;
  services: string[];
}

interface IPackageProps {
  pkg: IPackage | null | undefined;
}

const Package = ({ pkg }: IPackageProps) => {
  const name = pkg?.name || "";
  const price = pkg?.price || "";
  const desc = pkg?.description || "";
  const svcs = pkg?.services || [];
  return (
    <div className="max-w-4xl rounded-xl border-2 border-emerald-950 p-8">
      <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
        <div className="mb-6 flex-col md:mb-0 md:w-1/2">
          <h2 className="mb-2 text-lg font-semibold tracking-tighter">
            {name}
          </h2>
          <p className="mb-2 text-5xl font-bold">{price}</p>
          <p className="px-2">{desc}</p>
        </div>
        <div className="flex flex-col md:w-1/2">
          <h3 className="mb-2 font-semibold tracking-tighter">
            What's included
          </h3>
          <ul className="mb-4">
            {svcs?.map((svc) => (
              <li key={svc}>- {svc}</li>
            ))}
          </ul>
          <div>
            <button className="flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-2 text-orange-50 hover:bg-emerald-900">
              <span>Get Started</span>
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
