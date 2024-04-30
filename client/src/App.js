import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<h2>product</h2>} />
          <Route path="/add" element={<h2>add</h2>} />
          <Route path="/update" element={<h2>update</h2>} />
          <Route path="/logout" element={<h2>logout</h2>} />
          <Route path="/profile" element={<h2>profile</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
