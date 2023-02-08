import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/ProductList/Home/Home";
import { Filters } from "./Components/Filters/Filters";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";

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
  const produtos = [
    {
      id: 1,
      name: "Traje Epecial  + Capacete",
      image:'/Image/traje-1.png'  ,
      price: "R$100,00"

    },
    {
      id: 2,
      name: "Traje Espacial Laranja",
      image: "/Image/traje-2.png",
      price: "R$125,00"

    },
    {
      id: 3,
      name: "Traje Espacial Prata",
      image: "Image/traje-3.png",
      price: "R$130,00"

    },
    {
      id: 4,
      name: "Foguete Apolo 11",
      image: "Image/foguete-1.png",
      price: "R$400,00"

    },
    {
      id: 5,
      name: "Foguete Saturno V",
      image: "Image/foguete-2.png",
      price: "R$350,00"

    },
    {
      id: 6,
      name: "Foguete Falcon 9",
      image: "Image/foguete-3.png",
      price: "R$250,00"

    },
    {
      id: 7,
      name: "Camisa Nasa",
      image: "Image/camisa-1.png",
      price: "R$55,00"

    },
    {
      id: 8,
      name: "Camisa Nasa",
      image: "Image/camisa-2.png",
      price: "R$45,00"

    }
    
  ]

  
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
