import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import useAuth from "../hooks/useAuth";
import { Divider } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const DashboardLayout = () => {
  const { user } = useAuth();

  const [openSideBar, setOpenSideBar] = useState(false);

  const handleImageError = (e) => {
    e.target.src = "https://i.ibb.co/ZXScD70/avatar.png";
  };

  return (
    <div>
      <div className="flex justify-between md:grid md:grid-cols-12">
        <div className="col-span-3 xl:col-span-2 max-w-xs relative">
          <div className="hidden sm:block bg-amber-50/50 h-screen px-4 py-6 border-r shadow-lg w-full max-w-60">
            {/* <Sidebar /> */}
            <DashboardSidebar />
          </div>

          <div className="sm:hidden cursor-pointer relative max-w-xs w-full">
            <div className="toggle-icon px-4 py-6 relative">
              <MenuUnfoldOutlined
                className="text-2xl sm:hidden"
                onClick={() => setOpenSideBar(!openSideBar)}
              />
            </div>
            <div
              className={`absolute top-16 ${
                openSideBar
                  ? "left-0 top-16 z-50 w-60 h-[calc(100vh-4rem)] bg-slate-50 transition-all duration-500 ease-in-out px-4 py-6"
                  : "-right-[calc(100%-10rem)]"
              }  `}
            >
              <DashboardSidebar />
            </div>
          </div>
        </div>
        <div className="md:col-span-9 xl:col-span-10 px-4 flex-1">
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
