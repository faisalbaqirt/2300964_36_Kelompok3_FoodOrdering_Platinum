import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Scrollspy from "../../utils/Scrollspy";
import { useEffect } from "react";
import "../Home/home.css";
function Register() {
  useEffect(() => {
    const scrollspy = Scrollspy();
    return () => {
      scrollspy.dispose();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container my-5 ">
        <h2 className="text-center">Register</h2>
        <form>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3 ">
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
            Sign Up
          </button>
        </form>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default Register;
