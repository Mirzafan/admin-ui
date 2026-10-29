import React, { useState } from "react";

function PostCard(props) {
  const { title, body } = props;
  const [clicked, setClicked] = useState(false);

  // Handler untuk mengubah status clicked ketika card diklik
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div
      onClick={handleClick}
      className={`p-6 rounded-lg shadow cursor-pointer transition-colors duration-200 ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

export default PostCard;
