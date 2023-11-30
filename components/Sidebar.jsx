import React, { useState } from "react";

export default function Sidebar(props) {
  const [strikethroughStatus, setStrikethroughStatus] = useState({});

  const toggleStrikethrough = (noteId) => {
    setStrikethroughStatus((prevStatus) => ({
      ...prevStatus,
      [noteId]: !prevStatus[noteId],
    }));
  };

  const noteElements = props.notes.map((note, index) => {
    const handleDoubleClick = (event) => {
      event.stopPropagation();
      props.setCurrentNoteId(note.id);
      toggleStrikethrough(note.id);
    };

    const isStrikethrough = strikethroughStatus[note.id] || false;

    return (
      <div key={note.id}>
        <div
          className={`title ${
            note.id === props.currentNote.id ? "selected-note" : ""
          } ${isStrikethrough ? "strikethrough" : ""}`}
          onClick={() => props.setCurrentNoteId(note.id)}
          onDoubleClick={handleDoubleClick}
        >
          <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
          <button
            className="delete-btn"
            onClick={() => props.deleteNote(note.id)}
          >
            <i className="gg-trash trash-icon"></i>
          </button>
        </div>
      </div>
    );
  });

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Tasks</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
