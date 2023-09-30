import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="container mb-5">
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
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
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
