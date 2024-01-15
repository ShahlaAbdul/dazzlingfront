import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import SearchProvider from "./useContext/SearchContext";
import WishlistProvider from "./useContext/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <WishlistProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </WishlistProvider>
    </HelmetProvider>
  </React.StrictMode>
);
