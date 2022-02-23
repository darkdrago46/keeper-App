import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNote] = useState([]);

  function addnewNote(note) {
    addNote((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteItem(id) {
    addNote((prevValue) => {
      return notes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addnewNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
