import { Toaster } from "react-hot-toast";

interface IProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Providers;
