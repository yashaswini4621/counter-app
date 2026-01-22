import { useState } from "react";
import ReactPlayer from "react-player";

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "David" },
    { id: 4, name: "Emma" },
  ]);

  const [search, setSearch] = useState("");

  // Filter users based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Random YouTube video
  const videos = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    "https://www.youtube.com/watch?v=l482T0yNkeo",
  ];

  const randomVideo =
    videos[Math.floor(Math.random() * videos.length)];

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>User List</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Users */}
      {filteredUsers.length === 0 ? (
        <p><strong>No Users Found</strong></p>
      ) : (
        filteredUsers.map((user) => (
          <div key={user.id} style={{ marginTop: "10px" }}>
            <span>{user.name}</span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}

      <hr />

      <h3>Random YouTube Video</h3>
      <ReactPlayer url={randomVideo} controls width="100%" />
    </div>
  );
};

export default UserList;
