import React, { useEffect, useState } from "react";
import { Header, Footer } from "../Components/Layout";
import { ytvideoModel } from "../Interfaces";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";
import { Login, NotFound, Register, YtVideoDetails } from "../Pages";

function App() {
  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/YtVideoDetails/:ytvideoId"
            element={<YtVideoDetails />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
