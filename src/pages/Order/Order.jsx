import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import FormOrder from "../../components/FormOrder";
import Invoice from "../../components/Invoice";
import Footer from "../../components/Footer";
import Scrollspy from "../../utils/Scrollspy";
import "./order.css";

function Order() {
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const scrollspy = Scrollspy();
    return () => {
      scrollspy.dispose();
    };
  }, []);

  const handleOrderSubmit = (id) => {
    setOrderId(id);
    setIsOrderSubmitted(true);
  };

  const handleBackToOrder = () => {
    setIsOrderSubmitted(false);
  };

  return (
    <div>
      <Navbar />
      <Header />
      {isOrderSubmitted ? (
        <Invoice orderId={orderId} onBackToOrder={handleBackToOrder} />
      ) : (
        <FormOrder onOrderSubmit={handleOrderSubmit} />
      )}
      <Footer />
    </div>
  );
}

export default Order;
