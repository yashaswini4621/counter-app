import { useState } from "react";
import dateTime from "date-time";

const VideoPlayer = () => {
  const [comments, setComments] = useState([
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      comment: "Great video! Really enjoyed the content.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "John 2",
      comment: "Nice explanation!",
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "John 3",
      comment: "Very helpful tutorial.",
    },
  ]);

  return (
    <div>
      <h1>Video Player</h1>

      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        width="320"
        height="240"
        controls
      />

      <h2>This is a W3Schools tutorial video</h2>

      <p>Uploaded on: {dateTime()}</p>

      <h3>Comments</h3>

      {comments.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <img src={item.img} width="40" alt="user" />
          <strong> {item.name}</strong>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
