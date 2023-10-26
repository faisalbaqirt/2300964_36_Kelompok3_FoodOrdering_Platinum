import { useState, useEffect } from "react";
import {
  getAllProducts,
  createProduct,
  updateProduct,

} from "../../../utils/productAPI";


const AdminUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Status apakah sedang dalam mode edit
  const [showModal, setShowModal] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const [fullImageSrc, setFullImageSrc] = useState('')
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
      console.log("Data dari API:", productsData.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCreate = () => {
    setShowModal(true);
  };

  // const handleEdit = (product) => {
  //   setIsEditing(true);
  //   setEditedProduct({
  //     id: product.id,
  //     name: product.name,
  //     description: product.description,
  //     price: product.price,
  //     image: null,
  //   });
  //   setShowModal(true);
  // };

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
  // const handleDeleteProduct = async (productId) => {
  //   try {
  //     await deleteProduct(productId);
  //     setProducts((prevProducts) =>
  //       prevProducts.filter((prevProduct) => prevProduct.id !== productId)
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className="container" id="orderlist">
        <div className="content-title text-center">
          <h2> User List</h2>
        </div>
        {isLoading && (
          <div className="loader-container">
            <div className="spinner-border text-light" role="status"></div>
          </div>
        )}
        <div className="content-head">
          <button className="btn btn-dark admin-button-add" onClick={handleCreate}>
            Add
          </button>
        </div>

        <div className="table-container">
          <table className="table admin-table">
            <thead>
              <tr className="table-dark">
                <th>ID</th>
                <th>Foto</th>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <a href={product.image} className="avatar" onClick={(e) => {e.preventDefault(); setShowFullImage(true); setFullImageSrc(product.image); }}>
                      <img src={product.image} alt={product.name} />
                    </a>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    {Math.floor(product.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
        {showFullImage && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Foto Profil
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => { setShowFullImage(false); setFullImageSrc(''); }}
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center">
              <img src={fullImageSrc} alt="Full" className="img-fluid" />
              </div>
              
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default AdminUsers;
