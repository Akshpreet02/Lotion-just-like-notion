import React from "react";

function Header({openSideBar, closeSideBar, isSidebarOpen}) {
  return (
    <div className="container">
        <div className="bar" onClick={isSidebarOpen ? closeSideBar : openSideBar} >
            <p>&#9776;</p>
        </div>
        <div className="header">
        <h1>Lotion</h1>
        <p1>Like Notion, But Worse</p1>
        </div>
    </div>
  );
}

export default Header;