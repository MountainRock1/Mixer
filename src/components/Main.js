import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import MyProjects from "./MyProjects";
import SharedProjects from "./SharedProjects";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Create a home page for the route below, maybe a splash page*/}
        <Route path="/" element={<Home />} />
        <Route path="/myProjects" element={<MyProjects />} />
        <Route path="/sharedProjects" element={<SharedProjects />} />
      </Routes>
    </div>
  );
};

export default Main;
