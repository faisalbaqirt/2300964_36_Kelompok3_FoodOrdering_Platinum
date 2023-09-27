import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import FormOrder from "../../components/FormOrder";
import Invoice from "../../components/Invoice"
import Footer from "../../components/Footer";
import './order.css'

function Order () {
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