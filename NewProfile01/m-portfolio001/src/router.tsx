// [ROUTER] Central app routing configuration

import { createBrowserRouter } from "react-router-dom";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout wrapper
    children: [
      { index: true, element: <Home /> },   // "/"
      { path: "about", element: <About /> }, // "/about"
      { path: "contact", element: <Contact /> } // "/contact"
    ]
  }
]);
