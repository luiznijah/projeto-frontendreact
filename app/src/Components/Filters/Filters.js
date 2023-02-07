import React from "react";
import { FiltersStyle, Iput } from "./FiltersStyle";

export function Filters(){

    return(
        <FiltersStyle>
            <h1>Filters</h1>
            <Iput placeholder="Buscar Produto" />
            <Iput placeholder="Buscar Produto" />
            <Iput placeholder="Buscar Produto" />
        </FiltersStyle>
    )
}