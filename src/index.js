import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./components/Main";

const root = createRoot(document.getElementById("main"));
root.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);
