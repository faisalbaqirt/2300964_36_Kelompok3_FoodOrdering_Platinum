import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { login } from "../../utils/userAPI";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);

      if (response.status === 200 && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("role", response.data.role);
        window.location.href = "/login";
      } else {
        alert("Masukkan data yang benar!");
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="login">
      <Navbar />
      <div className="container">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default Login;
