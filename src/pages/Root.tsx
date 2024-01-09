import { Outlet } from "react-router-dom";

import Header from "../componenets/Header";
import Sidebar from "../componenets/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="contents">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
