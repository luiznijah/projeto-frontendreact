import React from "react";
import { HomeStyle, Select, ContainerHome } from "./HomeStyle";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home(props) {
  return (
    <>
      <ContainerHome>
        <Select>
          <option value="ordenar">Ordenar</option>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </Select>
        <HomeStyle>
          {props.produtos.map((produto) => {
            return (
              <ProductCard
                key={produto.id}
                produto={produto}
                // id={produto.id}
                // name={produto.name}
                // price={produto.price}
              />
            );
          })}
        </HomeStyle>
      </ContainerHome>
    </>
  );
}
