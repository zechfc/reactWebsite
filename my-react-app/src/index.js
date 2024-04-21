import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./pages/layout";

import Up from "./pages/up";
import Down from "./pages/down";
import RoomRental from "./pages/roomRental";
import About from "./pages/about";
import Signin from "./pages/signin";
import Cart from "./pages/cart";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Layout />} />
          <Route path="layout" element={<Layout />} />

          <Route path="down" element={<Down />} />
          <Route path="up" element={<Up />} />
          <Route path="about" element={<About />} />
          <Route path="roomRental" element={<RoomRental />} />
          <Route path="signin" element={<Signin />} />
          <Route path="cart" element={<Cart />} />


      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

