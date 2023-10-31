import { useState, useEffect } from "react";
import {
  getAllUsers,
  createUserByAdmin,
  updateUserByAdmin,
  deleteUser,
} from "../../../utils/userAPI";

const AdminUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [showFullImage, setShowFullImage] = useState(false);
  const [fullImageSrc, setFullImageSrc] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editedUser, setEditedUser] = useState({
    id: null,
    username: "",
    email: "",
    name: "",
    password: "",
    photo: null,
    role: "user",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getAllUsers();
      const sortedUsers = usersData.data.sort((a, b) => a.id - b.id);
      setUsers(sortedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleCreate = () => {
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setEditedUser({
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      password: user.password,
      photo: null,
      role: user.role,
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const { id, username, email, name, password, photo, role } = editedUser;
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("photo", photo);
      formData.append("role", role);

      if (isEditing) {
        await updateUserByAdmin(id, formData);
      } else {
        await createUserByAdmin(formData);
      }

      setIsLoading(false);
      setIsEditing(false);
      setShowModal(false);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setShowModal(false);
    setEditedUser({
      id: null,
      username: "",
      email: "",
      name: "",
      password: "",
      photo: null,
      role: "user",
    });
  };

  const handleSelectUser = (e, userId) => {
    if (e.target.checked) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  const handleDeleteSelectedUsers = async () => {
    try {
      setIsLoading(true);
      // permintaan HTTP untuk menghapus pesanan dari database
      await Promise.all(selectedUsers.map((userId) => deleteUser(userId)));

      alert("User yang dipilih berhasil dihapus");
    } catch (error) {
      console.error("Terjadi kesalahan saat menghapus user:", error);
    }

    setSelectedUsers([]);
    setIsLoading(false);
    fetchUsers();
  };

  const isDeleteVisible = selectedUsers.length > 0;
  const selectedCount = selectedUsers.length;

  return (
    <>
      <div className="container" id="userlist">
        <div className="content-title text-center">
          <h2> User List</h2>
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
        {isDeleteVisible && (
          <div className="select-visible">
            <button
              type="button"
              className="btn-close"
              onClick={(e) => setSelectedUsers([])}
            ></button>

            <p style={{ color: "black" }}>{selectedCount} selected</p>

            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleDeleteSelectedUsers}
            >
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        )}
        <div className="table-container">
          <table className="table admin-table">
            <thead>
              <tr className="table-dark">
                <th>
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === users.length}
                    onChange={(e) =>
                      e.target.checked
                        ? setSelectedUsers(users.map((user) => user.id))
                        : setSelectedUsers([])
                    }
                  />
                </th>
                <th>ID</th>
                <th>Foto</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={(e) => handleSelectUser(e, user.id)}
                    />
                  </td>
                  <td>{user.id}</td>
                  <td>
                    <a
                      href={user.photo}
                      className="avatar"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowFullImage(true);
                        setFullImageSrc(user.photo);
                      }}
                    >
                      <img src={user.photo} alt={user.name} />
                    </a>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
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
                    {isEditing ? "Edit User" : "Tambah User"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCancel}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <label htmlFor="username">Username:</label>
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

                    <label htmlFor="email">Email:</label>
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

                    <label htmlFor="name">Name:</label>
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

                    <label htmlFor="password">Password:</label>
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

                    <label htmlFor="photo">Profil Picture:</label>
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

                    <label htmlFor="role">Role:</label>
                    <select
                      id="role"
                      className="form-control"
                      name="role"
                      required
                      value={editedUser.role}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          role: e.target.value,
                        })
                      }
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
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
    </>
  );
};

export default AdminUsers;
