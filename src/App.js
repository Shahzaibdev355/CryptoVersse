import React from "react";
import './App.css'
import { ToastContainer } from "react-toastify"
import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes";

const App = () => {
  return (
    <>
      <Suspense fallback={
        <div>Loading...</div>
      }>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  )

};
export default App;
