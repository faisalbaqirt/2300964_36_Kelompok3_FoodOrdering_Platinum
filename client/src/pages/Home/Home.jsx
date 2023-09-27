import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Products from "../../components/Products";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import './home.css'

function Home () {
    return(
        <div>
            <Navbar />
            <Header />
            <Products />
            <Contact />
            <Footer />
        </div>
    )
};

export default Home;