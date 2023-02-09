import React from "react";
import { FiltersStyle, Iput} from "./FiltersStyle";



export function Filters(props) {
  return (
    <FiltersStyle>
      <h1>Filters</h1>
      <Iput 
      placeholder=" Valor Minimo:" 
      type={"number"} 
      value={props.minFilter}
      onChange={(e)=> {props.setMinFilter(e.target.value)}}
      />
      <Iput 
      placeholder=" Valor Maximo:" 
      type={"number"} 
      value={props.maxFilter}
      onChange={(e)=> {props.setMaxFilter(e.target.value)}}
      />
      <Iput 
      placeholder=" Buscar Produto:" 
      value={props.searchFilter}
      onChange={(e)=> {props.setSearchFilter(e.target.value)}}
      />
      
    </FiltersStyle>
  );
}
