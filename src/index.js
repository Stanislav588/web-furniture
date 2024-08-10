import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, useLocation } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
import ScrollToTop from "./scroll/ScrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <StoreContextProvider>
      <ScrollToTop />
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
