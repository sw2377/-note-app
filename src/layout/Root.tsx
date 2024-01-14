// import { Outlet } from "react-router-dom";

import Header from "../componenets/common/Header";
import Sidebar from "../componenets/common/Sidebar";
import NoteContainer from "../componenets/common/NoteContainer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <NoteContainer />
      </div>
    </>
  );
};

export default RootLayout;
