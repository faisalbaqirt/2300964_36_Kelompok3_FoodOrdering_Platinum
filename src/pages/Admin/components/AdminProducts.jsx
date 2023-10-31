import { useState, useEffect } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../utils/productAPI";

function AdminProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getAllProducts();
      setProducts(productsData.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCreate = () => {
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setEditedProduct({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: null,
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const { id, name, description, price, image } = editedProduct;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);

      if (isEditing) {
        await updateProduct(id, formData);
      } else {
        await createProduct(formData);
      }

      setIsLoading(false);
      setIsEditing(false);
      setShowModal(false);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setShowModal(false);
    setEditedProduct({
      id: null,
      name: "",
      description: "",
      price: "",
      image: null,
    });
  };
  const handleDeleteProduct = async (productId) => {
    try {
      setIsLoading(true);
      await deleteProduct(productId);

      setIsLoading(false);
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container" id="productlist">
      <div className="content-title text-center">
        <h2>Product List</h2>
      </div>
      {isLoading && (
        <div className="loader-container">
          <div className="spinner-border text-light" role="status"></div>
        </div>
      )}
      <div className="content-head">
        <button
          className="btn btn-dark admin-button-add"
          onClick={handleCreate}
        >
          Add
        </button>
      </div>
      <div className="admin-product-table">
        <div className="row admin-row">
          {products.map((product) => {
            return (
              <div
                className="admin-product-card col-md-3 col-sm-12"
                key={product.id}
              >
                <div
                  className="card admin-card"
                  style={{ position: "relative" }}
                >
                  <div className="admin-card-header">
                    <div
                      className="dropdown admin-product-dropdown"
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        zIndex: 1,
                      }}
                    >
                      <button
                        className="btn drop-btn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <div className="dropdown-menu">
                        <button
                          className="dropdown-item"
                          onClick={() => handleEdit(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <img
                      src={product.image}
                      className="admin-card-img"
                      alt={product.name}
                    />
                  </div>
                  <div className="admin-card-body text-uppercase">
                    <h3 className="admin-card-title">{product.name}</h3>
                    <p className="admin-card-text">{product.description}</p>
                    <p className="admin-card-price">
                      Harga:{" "}
                      {Math.floor(product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEditing ? "Edit Produk" : "Tambah Produk"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancel}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <label htmlFor="name">Nama Produk:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    required
                    value={editedProduct.name}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <br />

                  <label htmlFor="description">Deskripsi Produk:</label>
                  <input
                    type="text"
                    id="description"
                    className="form-control"
                    name="description"
                    required
                    value={editedProduct.description}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        description: e.target.value,
                      })
                    }
                  />
                  <br />

                  <label htmlFor="price">Harga Produk:</label>
                  <input
                    type="text"
                    id="price"
                    className="form-control"
                    name="price"
                    required
                    value={editedProduct.price}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <br />

                  <label htmlFor="image">Gambar Produk:</label>
                  <input
                    type="file"
                    id="image"
                    className="form-control"
                    name="image"
                    required
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        image: e.target.files[0],
                      })
                    }
                  />
                  <br />
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancel}
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProducts;
