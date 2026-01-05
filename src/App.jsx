import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import GuppyDetail from "./pages/GuppyDetail";
import "./App.css";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Aquavibe - Home";
    } else if (location.pathname.startsWith("/guppy/")) {
      document.title = "Aquavibe - Guppy Details";
    } else {
      document.title = "Aquavibe";
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guppy/:id" element={<GuppyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
