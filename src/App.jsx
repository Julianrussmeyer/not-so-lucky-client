// import { useState } from "react";
import { useAuthContext } from "./lib/useAuthContext";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import User from "./pages/User.jsx";
import Navbar from "./components/Navbar.jsx";
import IsPrivate from "./components/IsPrivate.jsx"
import Lotto6of49Page from "./pages/Lotto6of49Page.jsx"

function App() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/user" element={<IsPrivate><User /></IsPrivate>} />
        <Route path="/games/lotto-6of49" element={<IsPrivate><Lotto6of49Page /></IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
