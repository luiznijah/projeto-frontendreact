import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/ProductList/Home/Home";
import { Filters } from "./Components/Filters/Filters";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { produtos } from './Components/Assents/produtos'

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
  

  
  return (
    <>
      <GlobalStyle />
      <Header />

      <Container>
        <Filters/>
        <Home 
        produtos={produtos}
        />

        <Cart/>

      </Container>
    </>
  );
}

export default App;
