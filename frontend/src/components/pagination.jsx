import React from "react";
import style from "../CSS/pagination.css"

export default function Pagination({
  productsPage,
  total,
  paginado,
}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(total / productsPage); i++) {
    pages.push(i);
  }
  return (
    <nav className="nav">
      {console.log(productsPage, total, paginado)}
      <div >
          {pages.map((number) => (
              <button className="button" onClick={() => paginado(number)} >
                {number}
              </button>
          ))}
      </div>
    </nav>
  );
}