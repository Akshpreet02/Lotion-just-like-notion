import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./index.css";
import MainArea from "./contents/MainArea.jsx";
import Sidebar from "./contents/Sidebar.jsx";
import Header from "./contents/Header.jsx";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState({
    id: null,
    title: "",
    lastModified: new Date(),
    body: "",
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
  };

  const onDeleteNote = (noteId) => {
    setActiveNote({});
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateWithoutSave = (obj) => {
    setActiveNote(obj);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );

    setNotes(updatedNotesArr);
  };

  //   const getActiveNote = () => {
  //     const active_note = notes.find(({ id }) => id === activeNote?.id);

  // 	return active_note ? active_note : {}

  // };

  function closeSideBar() {
    setIsSidebarOpen(false);
  }

  function openSideBar() {
    setIsSidebarOpen(true);
  }

  return (
    <div className="App">
      <Header
        openSideBar={openSideBar}
        closeSideBar={closeSideBar}
        isSidebarOpen={isSidebarOpen}
      />
      {/* <div style = {{display: "flex", flexDirection: "row"}}> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
        }}
      >
        {isSidebarOpen && (
          <div
            style={{
              width: "25vw",
              border: "1px solid lightgray",
            }}
          >
            <Sidebar
              className="sidebar"
              notes={notes}
              onAddNote={onAddNote}
              onDeleteNote={onDeleteNote}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
            />
          </div>
        )}
        <MainArea
          formWidth={isSidebarOpen ? "70vw" : "100vw"}
          activeNote={activeNote}
          onUpdateNote={onUpdateNote}
          onDeleteNote={onDeleteNote}
          onUpdateWithoutSave={onUpdateWithoutSave}
        />
      </div>
    </div>
  );
}

export default App;
