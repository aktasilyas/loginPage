import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./AnaSayfa";
import About from "./About";
import Error from "./ErrorPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface User {
  data: {
    id: string;
    get_user: {
      first_name: string;
    };
    key: string;
  };
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <BrowserRouter>
      <div>
        <h1>React Router v6 Örneği</h1>
        <Routes>
          {!user ? (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Home onLogout={handleLogout} />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home onLogout={handleLogout} />} />
              <Route path="*" element={<Error />} />
            </>
          )}
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
