import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./searchBar";
import Pagination from "./pagination";
import ProductCard from "./productCard";
import style from "../CSS/catalogue.css"

export default function Catalogo() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productos, setProductos] = useState([]);
  const [productosPage] = useState(30);

  const fetchData = async (input) => {
    const response = await axios.get(
      `http://localhost:3000/api/search?producto=${input}`
    );
    setProductos(response);
  };

  const indexOfLastProduct = currentPage * productosPage;
  const indexOfFirstProduct = indexOfLastProduct - productosPage;
  const currentProduct = productos?.data?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginado = (pages) => setCurrentPage(pages);

  return (
    <div className="cont">
      <SearchBar onSearch={fetchData} />
      <ProductCard producto={currentProduct || []} />
      <Pagination
        productosPage={productosPage}
        total={productos?.data?.length}
        paginado={paginado}
      />
    </div>
  );
}