import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    console.log(note);
    setNotes((pre) => {
      return [...pre, note];
    });
    console.log(notes);
  }

  function deleteNote(id) {
    setNotes((pre) => {
      return pre.filter((name, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="main">
        <CreateArea onAdd={addNote} />

        {notes.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
