import React from "react";
import SingerApp from "./assets/components/SingerApp/SingerApp";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <SingerApp />
      <ToastContainer />
    </>
  );
}

export default App;
