import { IoIosAdd } from "react-icons/io";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>
          <IoIosAdd size={35} />
        </button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note, i) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
            </div>

            <small className="note-meta">
              Last Modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>

            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Sidebar;
