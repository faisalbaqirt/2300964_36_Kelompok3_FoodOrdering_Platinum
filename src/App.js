import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import { getUserProfile } from "./utils/userAPI";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import APIDocsPage from "./pages/Documentation/Documentation";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await getUserProfile();
      setUser(response);
    } catch (error) {
      console.error("Gagal mengambil data user", error);
    }
  };

  const isAuthenticated = localStorage.getItem("token");
  const isRole = localStorage.getItem("role");
  const isAdmin = isRole === "admin";

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/order"
            element={isAuthenticated ? <Order /> : <Navigate to="/login" />}
          ></Route>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/profile" /> : <Login />}
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? <Navigate to="/profile" /> : <Register />
            }
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin/*"
            element={isAdmin ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="/docs" element={<APIDocsPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
