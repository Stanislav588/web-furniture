import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./scroll/ScrollToTop";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { cartStore } from "./redux/configureCart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
    <BrowserRouter>
      <Provider store={cartStore}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </SnackbarProvider>
);
