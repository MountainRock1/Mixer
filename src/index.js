import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";

const root = createRoot(document.getElementById("main"));
root.render(
  <Router>
    <Main />
  </Router>
);
