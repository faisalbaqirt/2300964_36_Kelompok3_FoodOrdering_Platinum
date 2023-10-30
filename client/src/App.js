import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import APIDocsPage from "./pages/Documentation/Documentation";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/userprofile" element={<Profile />}></Route>
        <Route path="/documentation" component={APIDocsPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
