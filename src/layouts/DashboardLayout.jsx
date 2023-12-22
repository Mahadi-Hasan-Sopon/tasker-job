import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import useAuth from "../hooks/useAuth";
import { Divider } from "antd";

const DashboardLayout = () => {
  const { user } = useAuth();

  const handleImageError = (e) => {
    e.target.src = "https://i.ibb.co/ZXScD70/avatar.png";
  };

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-amber-50/50 h-screen px-4 py-6 border-r shadow-lg">
          {/* <Sidebar /> */}
          <DashboardSidebar />
        </div>
        <div className="col-span-10 px-4">
          {/* <TopBar /> */}
          <div className="flex justify-end px-4 py-5">
            <h1 className="text-3xl font-bold">
              <div className="avatar flex justify-center items-center gap-4">
                <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.photoURL}
                    onError={handleImageError}
                  />
                </div>
                <h3 className="text-sm font-semibold mt-2">
                  {user?.displayName?.length > 12
                    ? user?.displayName.slice(0, 12) + "..."
                    : user?.displayName}
                </h3>
              </div>
            </h1>
          </div>
          <Divider className="my-2" />
          {/* <Outlet /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
