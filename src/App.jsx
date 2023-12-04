import React, { useState, useEffect } from "react";
import Header from "./Header";
import Notes from "./Notes";
import AddNotes from "./AddNotes";
import { getInitialData } from "./data/notesDummy";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const titleLimit = 50;

  useEffect(() => {
    setNotes(getInitialData());
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleTitleChange = (e) => {
    if (e.target.value.length <= titleLimit) {
      setTitle(e.target.value);
    }
  };

  const randomId = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = 10;
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  const formData = {
    id: randomId(),
    title: title,
    body: body,
    archived: false,
    createdAt: new Date(),
  };

  const sendData = () => {
    const data = [formData, ...notes];
    setNotes(data);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <div className="wrap">
        <Header value={search} setSearch={setSearch} />

        <div className="main-content">
          <Notes notes={filteredNotes} deleteNote={deleteNote} />
          <AddNotes
            sendData={sendData}
            body={body}
            setBody={setBody}
            title={title}
            setTitle={handleTitleChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
