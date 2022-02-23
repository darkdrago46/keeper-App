import React, { useState } from "react";

function CreateArea(props) {
  const [note, createnote] = useState({
    title: "",
    content: ""
  });

  function onInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    createnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.addNote(note);
    createnote((prevValue) => {
      return {
        title: "",
        content: ""
      };
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={onInput}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={onInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
