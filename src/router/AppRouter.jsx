import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import About from "../pages/About";
import Journal from "../pages/Journal";
import Readings from "../pages/Reading";
import SignIn from "../pages/SignIn";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default AppRouter;