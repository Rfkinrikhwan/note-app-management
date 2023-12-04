import React from "react";
import img from "./assets/imageCard.png";

function AddNotes({ sendData, title, setTitle, body, setBody }) {
  return (
    <>
      <div className="add-notes">
        <div>
          <div className="add-title">
            <img src={img} alt="" />
            <input
              type="text"
              placeholder="Enter a note title"
              value={title}
              onChange={setTitle}
            />
            <span className="limit">{title.length} / 50</span>
          </div>
          <div className="add-body">
            <textarea
              placeholder="Enter the contents of your note here..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </div>
        <button onClick={sendData}>Save</button>
      </div>
    </>
  );
}

export default AddNotes;
