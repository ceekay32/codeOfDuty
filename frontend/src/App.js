import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInUI from "./components/authentication/SignIn";
import NavBarUI from "./components/NavBar";
import SignUpUI from "./components/authentication/SignUp";
import HomeUI from "./components/Home/home";
import ProfileUI from "./components/Home/profile";

function App() {
  return (
    <div>
      <Router>
        <NavBarUI />
        <Routes>
          <Route path="/" element={<HomeUI />} />
          <Route path="/profile" element={<ProfileUI />} />
          <Route path="/signin" element={<SignInUI />} />
          <Route path="/signup" element={<SignUpUI />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
