import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">{/* <Sidebar /> */}</div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
