import "./styles.css";
import Naslovna from "./Components/Naslovna";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import Privacy from "./Privacy";
import Slike from "./Slike";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna />}></Route>
          <Route path="/slike" element={<Slike />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
