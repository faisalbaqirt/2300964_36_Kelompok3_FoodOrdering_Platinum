import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Products from "../../components/Products";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Scrollspy from "../../utils/Scrollspy"
import "./home.css";

function Home() {
  useEffect(() => {
    const scrollspy = Scrollspy();
    return () => {
      scrollspy.dispose();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
