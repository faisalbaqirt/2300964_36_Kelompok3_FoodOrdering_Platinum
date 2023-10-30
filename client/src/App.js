import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import "./App.css"

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.error("Gagal mengambil informasi pengguna:", error);
          }
        });
    }
  }, []);


  const isAuthenticated = localStorage.getItem("token");
  const isRole = localStorage.getItem("role")
  const isAdmin = isRole === "admin";


  return (
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order" element={isAuthenticated ? <Order /> : <Navigate to="/login" />}></Route>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/register" element={isAuthenticated  ? <Navigate to="/profile" /> : <Register />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/admin/*" element={isAdmin ? <Admin /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
