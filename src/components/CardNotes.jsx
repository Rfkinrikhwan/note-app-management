import React from "react";
import img from "../assets/imageCard.png";
import { FaRegTrashAlt } from "react-icons/fa";

function CardNotes({ data, format, deleteNote }) {
  return (
    <>
      {data.length > 0 ? (
        data.map((notes) => (
          <div className="card-note" key={notes.id}>
            <img src={img} alt="" />

            <div className="card-note-content">
              <div className="text">
                <h2>{notes.title}</h2>
                <p>{notes.body}</p>
              </div>

              <div className="content-bottom">
                <span className="badge-time">{format(notes.createdAt)}</span>
                <button onClick={() => deleteNote(notes.id)}>
                  <FaRegTrashAlt size={16} />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div align="center" className="data-not-found">
          <span className="text-not-found">Data record not found</span>
        </div>
      )}
    </>
  );
}

export default CardNotes;
