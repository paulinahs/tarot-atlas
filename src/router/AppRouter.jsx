import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

import Home from "../pages/Home";
import About from "../pages/About";
import Journal from "../pages/Journal";
import Readings from "../pages/Reading";

function AppRouter() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/readings" element={<Readings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;