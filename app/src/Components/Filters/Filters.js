import React from "react";
import { FiltersStyle, Iput} from "./FiltersStyle";

export function Filters() {
  return (
    <FiltersStyle>
      <h1>Filters</h1>
      <Iput placeholder=" Valor Minimo:" type={"number"} />
      <Iput placeholder=" Valor Maximo:" type={"number"} />
      <Iput placeholder=" Buscar Produto:" />
      
    </FiltersStyle>
  );
}
