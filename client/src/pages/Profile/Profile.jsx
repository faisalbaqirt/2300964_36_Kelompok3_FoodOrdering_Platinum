import React, { useState, useEffect } from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Scrollspy from "../../utils/Scrollspy";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "rizki@example.com",
    avatar: null,
    tempName: "",
    tempPassword: "",
    confirmPassword: "",
    isProfilePictureChanged: false,
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setUser({
        ...user,
        avatar: URL.createObjectURL(file),
        isProfilePictureChanged: true,
      });
    }
  };

  const handleNameChange = (e) => {
    setUser({ ...user, tempName: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, tempPassword: e.target.value });
  };

  const handleUpdate = () => {
    // if (user.tempPassword !== user.confirmPassword) {
    //   alert("Password and confirmation do not match.");
    //   return;
    // }

    setUser({ ...user, name: user.tempName, password: user.tempPassword });

    alert("Updated Successfully!");
  };

  const handleSavePicture = () => {
    alert("Picture Successfully saved!");
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
          <button onClick={handleImageClick}>Change Profile Picture</button>
          <button
            onClick={handleSavePicture}
            disabled={!user.isProfilePictureChanged}
          >
            Save
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="image-upload"
            style={{ display: "none" }}
          />
          <div className="card-info">
            <h3>Change Username</h3>
            <input
              type="text"
              className="change-username"
              value={user.tempName}
              onChange={handleNameChange}
            />

            <h3>Change Password</h3>
            <input
              type="password"
              className="change-password"
              value={user.tempPassword}
              onChange={handlePasswordChange}
            />
          </div>

          <button onClick={handleUpdate}>Update</button>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Profile;
