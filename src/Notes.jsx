import React from "react";
import CardNotes from "./components/CardNotes";
import { FaRegStickyNote } from "react-icons/fa";
import { showFormattedDate } from "./data/notesDummy";

function Notes({ notes, deleteNote }) {
  return (
    <>
      <div className="notes-content">
        <div className="heading">
          <FaRegStickyNote size={25} />
          <h2>Notes</h2>
        </div>
        <div className="card-data">
          <CardNotes
            data={notes}
            format={showFormattedDate}
            deleteNote={deleteNote}
          />
        </div>
      </div>
    </>
  );
}

export default Notes;
