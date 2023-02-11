import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/ProductList/Home/Home";
import { Filters } from "./Components/Filters/Filters";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { produtos } from "./Components/Assents/produtos";
import { Footer } from "./Components/Footer/Footer";



const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }
`;
const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
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
        <Home
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        ordination={ordination}
        setOrdination={setOrdination}
        produtos={produtos}
        />
         
        <Cart />
      </Container>
      <Footer/>
    </>
  );
}

export default App;
