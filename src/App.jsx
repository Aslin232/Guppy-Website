import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuppyDetail from "./pages/GuppyDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guppy/:id" element={<GuppyDetail />} />
      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
