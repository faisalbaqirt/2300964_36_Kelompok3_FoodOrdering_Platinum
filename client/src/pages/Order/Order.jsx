import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import FormOrder from "../../components/FormOrder";
import Invoice from "../../components/Invoice"
import Footer from "../../components/Footer";
import Scrollspy from "../../utils/Scrollspy";
import './order.css'

function Order () {

    useEffect(() => {
        const scrollspy = Scrollspy();
        return () => {
          scrollspy.dispose();
        }
      }, []);

    return(
        <div>
            <Navbar />
            <Header />
            <FormOrder />
            <Invoice />
            <Footer />
        </div>
    )
};

export default Order;