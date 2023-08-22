import React from "react";

function Sidebar() {
  return (
    <div className="sidebar bg-primary text-white p-2 sticky-top">
      <div className="m-5">
        <i className="me-3 fs-4"></i>
        <span className="brand-name fs-3">KPI Library</span>
      </div>
      <div className="list-group list-group-flush">
        <a className="list-group-item bg-primary text-white py-4 my-1">
          <i className="bi bi-chat-left-text fs-5 me-3"></i>
          <span className="fs-5">Öneri Talepleri</span>
        </a>
        <a className="list-group-item bg-primary text-white py-4 my-1">
          <i className="bi bi-list-check fs-5 me-3"></i>
          <span className="fs-5">Kabul Edilen Öneriler</span>
        </a>
        <a className="list-group-item bg-primary text-white py-4 my-1">
          <i className="bi bi-trash-fill fs-5 me-3"></i>
          <span className="fs-5">Silinen Öneriler</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
