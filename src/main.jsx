import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS
import "/public/assets/css/base7dd3.css";
import "/public/assets/css/magnific7dd3.css";
import "/public/assets/css/animated-headlines7dd3.css";
import "/public/assets/css/style7dd3.css";

// JS (static, loaded globally)
const scriptUrls = [
  "/public/assets/js/jquery7dd3.js",
  "/public/assets/js/isotope.js",
  "/public/assets/js/magnific.js",
  "/public/assets/js/animated-headlines7dd3.js",
  "/public/assets/js/waypoints7dd3.js",
  "/public/assets/js/app.js",
  "/public/assets/js/init7dd3.js",
];

scriptUrls.forEach((url) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = false;
  document.body.appendChild(script);
});

// React render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
