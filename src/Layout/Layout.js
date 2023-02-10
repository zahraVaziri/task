import React from "react";
import Navigation from "../pages/Navgation/Navgation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
