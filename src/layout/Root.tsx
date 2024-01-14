// import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import NoteContainer from "./NoteContainer";

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
