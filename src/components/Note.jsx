import React from "react";

function Note(props) {
  function deleteItem(event) {
    props.delete(props.id);
    event.preventDefault();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteItem}>DELETE</button>
    </div>
  );
}

export default Note;
