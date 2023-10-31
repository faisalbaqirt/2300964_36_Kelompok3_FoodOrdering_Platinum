import React, { useState, useEffect } from "react";
import { getUserProfile, editProfile } from "../../utils/userAPI";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  const [fullImageSrc, setFullImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [editedUser, setEditedUser] = useState({
    id: null,
    username: "",
    email: "",
    name: "",
    password: "",
    photo: null,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getUserProfile();
      setUser(response);
    } catch (error) {
      console.error("Gagal mengambil data user", error);
    }
  };

  const handleEditProfile = (user) => {
    setShowModal(true);
    setEditedUser({
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      password: user.password,
      photo: user.photo,
    });
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    const { id, username, email, name, password, photo } = editedUser;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("photo", photo);

    // Kirim permintaan ke server untuk mengedit profil
    await editProfile(id, formData);

    setIsLoading(false);
    setShowModal(false);
    fetchData();
  };

  const handleCancelProfile = () => {
    setShowModal(false);
    setEditedUser({
      id: null,
      username: "",
      email: "",
      name: "",
      password: "",
      photo: null,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container-profile">
        {isLoading && (
          <div className="loader-container">
            <div className="spinner-border text-light" role="status"></div>
          </div>
        )}
        <div className="profile">
          <div className="section-title profile-title text-center">
            <h2>Profile</h2>
          </div>
          <div className="user-info">
            <div className="info-header">
              <img
                src={user.photo}
                alt={user.username}
                onClick={() => {
                  setShowFullImage(true);
                  setFullImageSrc(user.photo);
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="info-body">
              <h3 className="text-center mb-5">{user.name}</h3>
              <h3>
                Username:
                <span className=" ms-2">{user.username}</span>
              </h3>
              <h3>
                Email:
                <span className=" ms-2">{user.email}</span>
              </h3>
            </div>
            <div className="info-footer">
              <button
                className="btn btn-primary"
                onClick={() => handleEditProfile(user)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Profile</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCancelProfile}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <label htmlFor="username">Change Username:</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      name="username"
                      required
                      value={editedUser.username}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          username: e.target.value,
                        })
                      }
                    />
                    <br />

                    <label htmlFor="email">Change Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      required
                      value={editedUser.email}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          email: e.target.value,
                        })
                      }
                    />
                    <br />

                    <label htmlFor="name">Change Name:</label>
                    <input
                      type="tex"
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

                    <label htmlFor="password">Change Password:</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
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

                    <label htmlFor="photo">Change Profil Picture:</label>
                    <input
                      type="file"
                      id="photo"
                      className="form-control"
                      name="photo"
                      required
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          photo: e.target.files[0],
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
        {showFullImage && (
          <div className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Foto Profil</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setShowFullImage(false);
                      setFullImageSrc("");
                    }}
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
      <Contact />
      <Footer />
    </>
  );
};

export default Profile;
