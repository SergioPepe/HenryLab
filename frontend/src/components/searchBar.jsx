import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "../CSS/searchBar.css"

export default function SearchBar(props) {
    const [search, setSearch] = useState({ product: "" })

    const { push } = useHistory();


  
    const onSubmit = (e) => {
        e.preventDefault();
        props.onSearch(search)
    };

    return (
        <form
            className="s"

            onSubmit= {onSubmit}
        >
            <input
                className="inp"
                type= "text"
                placeholder="Búsqueda"
                onChange= {(e) => setSearch(e.target.value)}
            />
        </form>
    )
}
