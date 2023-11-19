import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ResultProvider } from "./contexts/ResultContext.jsx";
import App from "./pages/App.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ResultProvider>
    <RouterProvider router={router} />
  </ResultProvider>
);
