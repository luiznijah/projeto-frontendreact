import React from "react";
import { HomeStyle, Select, ContainerHome } from "./HomeStyle";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home({ordination,minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter,
  setOrdination, produtos}) {
  return (
    <>
      <ContainerHome>
        <Select
        value={ordination}
        onChange={(e)=>{setOrdination(e.target.value)}} >
          <option value="ordenar">Ordenar</option>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </Select>
        <HomeStyle>{produtos
          .sort((a,b)=>{
            if (ordination === "crescente"){
              if(a.name < b.name){
                return -1
              }else if (a.name > b.name){
                return 1
              }else{
                return 0
              }
            }else if (ordination === "decrescente"){
              if (a.name > b.name){
                return -1
              }else if (a.name < b.name){
                return 1
              }else{
                return 0
              }
            }
          })
            .filter((produto) => {
              return produto.name
                .toLowerCase()
                .includes(searchFilter.toLowerCase());
            })
            .filter((produto) => {
              return minFilter  ? produto.price.includes(minFilter) : produto;
            })
            .filter((produto) => {
              return maxFilter ? produto.price.includes(maxFilter) : produto;
            })
            .map((produto) => {
              return <ProductCard key={produto.id} produto={produto} />;
            })}
          {/* <ProductCard/> */}
          
          
        </HomeStyle>
      </ContainerHome>
    </>
  );
}
