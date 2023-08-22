import React from "react";

function Card({ title, direction, unit, category }) {
  return (
    <div className="col-md-12">
      <div className="rounded p-2 bg-primary text-white d-flex align-items-center">
        <div className="container">
          <i class="bi bi-nut"></i>
          <div className="d-flex align-items-center">
            <h3 className="fs-5 ">Gösterge Adı:</h3>
            <h3 className="fs-6 ms-2">{title}</h3>
          </div>
          <div className="d-flex align-items-center">
            <h3 className="fs-5 ">Yönü:</h3>
            <h3 className="fs-6 ms-2 ">{direction}</h3>
          </div>
          <div className="d-flex align-items-center">
            <h3 className="fs-5 ">Birimi:</h3>
            <h3 className="fs-6 ms-2">{unit}</h3>
          </div>
          <div className="d-flex align-items-center">
            <h3 className="fs-5 ">Kategori:</h3>
            <h3 className="fs-6 ms-2">{category}</h3>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Card;
