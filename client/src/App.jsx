import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import University1 from "./pages/University1";
import University2 from "./pages/University2";

function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-3 flex gap-4 justify-center">
      <Link to="/" className="hover:underline">University 1</Link>
      <Link to="/university-2" className="hover:underline">University 2</Link>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Routes>
        <Route path="/" element={<University1 />} />
        <Route path="/university-2" element={<University2 />} />
      </Routes>
    </div>
  );
}
