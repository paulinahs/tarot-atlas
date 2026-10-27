import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Reading from "../pages/Reading";
import Library from "../pages/Library";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;