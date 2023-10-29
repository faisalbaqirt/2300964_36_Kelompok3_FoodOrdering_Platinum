import React, { useState, useEffect } from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Scrollspy from "../../utils/Scrollspy";
import "./Profile.css";


const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "rizki@example.com",
    avatar: null,
  });

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 
  const [editedUser, setEditedUser] = useState({
    name: user.name,
    password: "",
    avatar: null,
  });

  const handleImageClick = () => {
    document.getElementById("image-upload").click();
  };

  useEffect(() => {
    const scrollspy = Scrollspy();
    return () => {
      scrollspy.dispose();
    };
  }, []);

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     setUser({
  //       ...user,
  //       avatar: URL.createObjectURL(file),
  //     });
  //   }
  // };

  const handleEditProfile = () => {
    setIsEditing(true);
    setEditedUser({
      name: user.name,
      password: "",
      avatar: null,
    });
    setShowModal(true);
  };

  const handleSaveProfile = () => {

    setShowModal(false);
  };

  const handleCancelProfile = () => {
    setShowModal(false);
    setEditedUser({
      name: user.name,
      password: "",
      avatar: null,
    });
  };

  return (
    <div className="container-profile">
      <Navbar />
      <div className="Profile">
        <h1>Profile</h1>
        <div className="user-info">
          <img
            src={user.avatar || ""}
            alt=""
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <button onClick={handleEditProfile}>Edit Profile</button>
        </div>
      </div>
      <Contact />
      <Footer />
      {showModal && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEditing ? "Edit Produk" : "Edit Profile"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancelProfile}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <h3 htmlFor="name">Change Username:</h3>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    required
                    value={editedUser.name}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        name: e.target.value,
                      })
                    }
                  />
                  <br />

                  <h3 htmlFor="description">Change Password:</h3>
                  <input
                    type="password"
                    id="description"
                    className="form-control"
                    name="description"
                    required
                    value={editedUser.password}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        password: e.target.value,
                      })
                    }
                  />
                  <br />

                  <h3 htmlFor="image">Change Profil Picture:</h3>
                  <input
                    type="file"
                    id="image"
                    className="form-control"
                    name="image"
                    required
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
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
                  onClick={handleCancelProfile}
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveProfile}
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
};

export default Profile;
