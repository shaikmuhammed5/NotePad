import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpand,setExpand] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  function expand (){
    setExpand(!isExpand)
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand? "3" : "1"}
        />
        <Zoom in={isExpand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
