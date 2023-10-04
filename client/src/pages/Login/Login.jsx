import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Scrollspy from "../../utils/Scrollspy";
import { useEffect } from "react";
import "./login.css";
function Login() {
  useEffect(() => {
    const scrollspy = Scrollspy();
    return () => {
      scrollspy.dispose();
    };
  }, []);

  return (
    <div className="login">
      <Navbar />
      <div className="container">
        <h2 className="text-center">Login</h2>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Username
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
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
