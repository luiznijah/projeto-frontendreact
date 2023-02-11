import styled from "styled-components";


export const ProductCardStyle = styled.div`
    background-color: white;
    color: black;
    height: 20em;
    width: 15em;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 6px solid SlateGrey;
    border-radius: 18px;
    box-shadow: 0px 0px 12px white;
    
    
`;
export const Img = styled.img`
    height: 20vh;
    display: block;
    padding-bottom: 8px;
    padding-top: 5px
`;

export const Nome = styled.h3`
    padding: 10px 0px;
`
export const Valor = styled.h2`
    color: red;
`

export const Button = styled.button`
    border: 2px solid black;
    border-radius: 12px;
    height: 2em;
    margin: 1em 0px;
    padding: 0px 5px;

    transition: color 0.3s;
  &:hover {
    color: white;
  }
    transition: background-color 0.3s;
  &:hover {
    background-color: black;
  }
`;
