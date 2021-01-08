import React, { useState, useEffect, useMemo } from "react";
import style from "../CSS/productCard.css"

export default function Product(props) {
  const [info, setInfo] = useState([]);
  const [position, setPosition] = useState({ by: "", order: "asc" });

  useEffect(() => setInfo(props.producto), [props.producto]);

  const post = useMemo(() => {
    const arr = [...info];

    if (position.by) {
      return arr?.sort((a, b) => {
        if (position.order === "asc") {
          return a[position.by] > b[position.by] ? 1 : -1;
        }
        return a[position.by] < b[position.by] ? 1 : -1;
      });
    }
    return arr;
  }, [position, info]);



  const positionAsc = (e) => {
    e.preventDefault();
    setPosition({ by: "price", order: "asc" });
  };

  const positionDesc = (e) => {
    e.preventDefault();
    setPosition({ by: "price", order: "desc" });
  };

  return (
    <div className="container">
      <h1 className="tlt">Precio</h1>
      <div className="div">
        <button
          className="btn"
          onClick={positionAsc}
        >
          mas barato
        </button>
        <button
          className="btn"
          onClick={positionDesc}
        >
          mas caro
        </button>
      </div>
      <div className="order" >
        {post?.map((p, i) => (
          <div
            key={i}
          >
            <img
              className="img"
              alt="Imagen de Producto"
              src={p.img}
            />
            <h1 className="h1">{p.title}</h1>
            <div>
              <div >
                Precio: {p.price} {p.currency_id}
              </div>
              <div>Condicion: {p.condition}</div>
              <div>Stock: {p.available_quantity}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}