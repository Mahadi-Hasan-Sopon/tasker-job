import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const PublicLayout = () => {
  return (
    <div>
      {/* NavBar.jsx */}
      <Navbar />
      <div className="outlet min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      {/* Footer.jsx */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
