import { useState, useEffect } from "react";
import { createOrder } from "../utils/orderAPI";
import { getUserProfile } from "../utils/userAPI";

const FormOrder = ({ onOrderSubmit }) => {
  const [product_name, setProductName] = useState("paket ayam geprek");
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getUserProfile();
      setName(response.name);
    } catch (error) {
      console.error("Gagal mengambil data user", error);
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderData = {
        product_name,
        quantity,
        name,
        telephone,
        address,
      };

      const response = await createOrder(orderData);

      if (response && response.order_id.id) {
        onOrderSubmit(response.order_id.id);
      } else {
        console.error("Tidak dapat membuat pesanan.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="order" className="container">
      <div className="section-title text-center">
        <h2>Form Pemesanan Produk</h2>
      </div>
      <div className="order-content">
        <form onSubmit={handleOrderSubmit}>
          <label htmlFor="product_name">Nama Produk:</label>
          <select
            id="product_name"
            className="form-control"
            name="product_name"
            required
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
          >
            <option value="paket ayam geprek">Paket Ayam Geprek</option>
            <option value="ayam geprek">Ayam Geprek</option>
          </select>
          <br />

          <label htmlFor="quantity">Jumlah:</label>
          <input
            type="number"
            id="quantity"
            className="form-control"
            name="quantity"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <br />

          <label htmlFor="name">Nama Pemesan:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label htmlFor="telephone">Telepon:</label>
          <input
            type="text"
            id="telephone"
            className="form-control"
            name="telephone"
            required
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <br />

          <label htmlFor="address">Alamat:</label>
          <input
            type="text"
            id="address"
            className="form-control"
            name="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />

          <button type="submit" id="create-order" className="btn-order">
            Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormOrder;
