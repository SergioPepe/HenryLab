import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./searchBar";
import Pagination from "./pagination";
import ProductCard from "./productCard";
import style from "../CSS/catalogue.css"

export default function Catalogo() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [productsPage] = useState(30);

  const fetchData = async (input) => {
    const response = await axios.get(
      `http://localhost:3000/api/search?producto=${input}`
    );
    setProducts(response);
  };

  const indexOfLastProduct = currentPage * productsPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPage;
  const currentProduct = products?.data?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginado = (pages) => setCurrentPage(pages);

  return (
    <div className="cont">
      <SearchBar onSearch={fetchData} />
      <ProductCard producto={currentProduct || []} />
      <Pagination
        productsPage={productsPage}
        total={products?.data?.length}
        paginado={paginado}
      />
    </div>
  );
}