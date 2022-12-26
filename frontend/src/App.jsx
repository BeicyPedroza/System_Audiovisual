import React from "react";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { Route, Routes } from "react-router-dom";

import "./assets/global.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <h1 className="container">
              Sistemas Profesionales de audio y video
            </h1>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
