import React, { useState } from "react";

function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert("Arama Yapıldı: " + searchQuery);
  };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 1000, marginBottom: 1, padding: 0 }}>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="input-group shadow-lg">
          <div className="input-group-prepend" onClick={handleSearch}>
            <span className="input-group-text" id="search-addon">
              <i className="bi bi-search text-secondary fs-4 pl-3" />
            </span>
          </div>
          <input
            type="text"
            className="form-control text-secondary fs-4 pl-3"
            placeholder="Hızlı Arama..."
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav;