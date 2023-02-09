import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/ProductList/Home/Home";
import { Filters } from "./Components/Filters/Filters";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { produtos } from "./Components/Assents/produtos";
import { ProductCard } from "./Components/ProductList/ProductCard/ProductCard";
import { HomeStyle } from "./Components/ProductList/Home/HomeStyle";
import { ContainerHome } from "./Components/ProductList/Home/HomeStyle";
import { Select } from "./Components/ProductList/Home/HomeStyle";

// import { Items } from "./Components/ShoppingCart/Items/Items";

// import './App.css';
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }
`;
const Container = styled.main`
  width: 100vw;
  height: 90vh;
  background-color: grey;
  display: flex;
  flex-direction: row;
`;

function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [ordination, setOrdination] = useState("");


  return (
    <>
      <GlobalStyle />
      <Header />

      <Container>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          ordination={ordination}
          setOrdination={setOrdination}
        />
        <Home/>
        <ContainerHome>
          <Select
          value={ordination}
          onChange={(e)=>{setOrdination(e.target.value)}} >
            <option value="ordenar">Ordenar</option>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </Select>
          <HomeStyle>
          {produtos
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
              return minFilter ? produto.price.includes(minFilter) : produto;
            })
            .filter((produto) => {
              return maxFilter ? produto.price.includes(maxFilter) : produto;
            })
            .map((produto) => {
              return <ProductCard key={produto.id} produto={produto} />;
            })}
          </HomeStyle>
        </ContainerHome>
        {/* </Home> */}

        <Cart />
      </Container>
    </>
  );
}

export default App;
