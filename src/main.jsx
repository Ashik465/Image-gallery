import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainGallery from "./image-gallery/MainGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainGallery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
 
);
