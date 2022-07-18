import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Home/Portfolio";
import Team from "./Pages/Home/Team";
import Contact from "./Pages/Home/Contact";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
