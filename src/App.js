import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    
      <div>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    
  );
}

export default App;
