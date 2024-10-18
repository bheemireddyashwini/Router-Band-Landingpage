import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import Login from "./components/Login"

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="login">Login</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />}/>
        </Routes>
      </main>
    </>
  );
}
