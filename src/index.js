import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// np
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <Star /> */}
  </React.StrictMode>
);
