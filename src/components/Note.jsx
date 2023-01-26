import React from "react";

function Note({ title, content, id, delItem }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => delItem(id)}>DELETE</button>
    </div>
  );
}

export default Note;
