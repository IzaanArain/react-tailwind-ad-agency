import MainView from "../view/main-view";
import Navbar from "../components./reusables/navbar";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
      <Navbar />
      <MainView />
    </div>
  );
};

export default MainLayout;
