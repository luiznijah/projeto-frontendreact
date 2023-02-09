import React from "react";
import { HomeStyle, Select, ContainerHome } from "./HomeStyle";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home(props) {
  return (
    <>
      <ContainerHome>
        {/* <Select
        value={props.ordination}
        onChange={(e)=>{props.setOrdination(e.target.value)}} >
          <option value="ordenar">Ordenar</option>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </Select> */}
        {/* <HomeStyle>
          <ProductCard/>
          
        </HomeStyle> */}
      </ContainerHome>
    </>
  );
}
