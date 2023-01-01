import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <Link to="/" className="active-link">
        Home
      </Link>
      <Link to="/myProjects" className="active-link">
        My Projects
      </Link>
      <Link to="/sharedProjects" className="active-link">
        Shared Projects
      </Link>
    </ul>
  );
};

export default Navbar;
