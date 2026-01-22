import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import UserList from "./components/UserList/UserList";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn && (
        <>
          <VideoPlayer />
          <UserList />
        </>
      )}
    </div>
  );
};

export default App;
