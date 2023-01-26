import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([{title: 'smaple1', detail:'sample 1'}, {title: 'smaple2', detail:'sample 2'}]);

  const onAdd = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const delItem = (id) => {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.detail}
            delItem={delItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
