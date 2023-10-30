import { useState, useEffect } from "react";
import { getAllProducts } from "../utils/productAPI";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getAllProducts();
      setProducts(productsData.data);
      console.log("Data dari API:", productsData.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <div className="container" id="products">
      <h2>Menu</h2>
      <div className="row justify-content-center">
        {products.map((product) => {
          return (
            <div className="col-md-4 col-sm-12" key={product.id}>
              <div className="card">
                <div className="card-header">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                </div>
                <div className="card-body text-uppercase">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price">Harga:{" "}
                    {Math.floor(product.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="order-link text-center">
        <a href="/order#order" id="order-here">
          Order Here!
        </a>
      </div>
    </div>
  );
}

export default Products;
