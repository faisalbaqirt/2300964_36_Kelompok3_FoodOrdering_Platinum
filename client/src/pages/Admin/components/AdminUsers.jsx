import { useState, useEffect } from "react";
import { getAllUsers, deleteUser } from "../../../utils/userAPI";

const AdminUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [showFullImage, setShowFullImage] = useState(false);
  const [fullImageSrc, setFullImageSrc] = useState("");

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
      setIsLoading(true)
      // permintaan HTTP untuk menghapus pesanan dari database
      await Promise.all(selectedUsers.map((userId) => deleteUser(userId)));

      console.log("User yang dipilih berhasil dihapus");
    } catch (error) {
      console.error("Terjadi kesalahan saat menghapus user:", error);
    }

    setSelectedUsers([]);
    setIsLoading(false)
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
