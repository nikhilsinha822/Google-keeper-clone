import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    detail: ""
  });
  const handleEvent = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      detail: ""
    });
  };
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleEvent}
          value={note.title}
        />
        <textarea
          name="detail"
          placeholder="Take a note..."
          rows="3"
          onChange={handleEvent}
          value={note.detail}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
