import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* eslint-disable no-unused-vars */
import { Home } from "./pages/home/index";
import { Login } from "./pages/login/index";
import { Feed } from "./pages/feed";
/* eslint-disable no-unused-vars */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}
export default App;
