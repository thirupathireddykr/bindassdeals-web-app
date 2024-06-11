import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
