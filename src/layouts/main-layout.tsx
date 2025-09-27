import CustomNavbar from "../components./reusables/custom-navbar";
import CustomFooter from "../components./reusables/custom-footer";
import Providers from "../providers";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <Providers>
      <div className="overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
        <CustomNavbar />
        <Outlet />
        <CustomFooter />
      </div>
    </Providers>
  );
};

export default MainLayout;
