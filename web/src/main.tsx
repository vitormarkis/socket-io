import React from "react"
import ReactDOM from "react-dom/client"
import App, { loader as roomLoader } from "./App"
import "./index.css"
import { AuthProvider } from "./contexts/Auth"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
      },
      {
        path: "/:room",
        loader: roomLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
