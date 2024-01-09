// import { Outlet } from "react-router-dom";

import Header from "../componenets/common/Header";
import Sidebar from "../componenets/common/Sidebar";
import Contents from "../componenets/common/Contents";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Contents />
      </div>
    </>
  );
};

export default RootLayout;
