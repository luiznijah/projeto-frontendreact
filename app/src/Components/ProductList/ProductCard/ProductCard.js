import React from "react";
import { ProductCardStyle, Img, Button, Nome, Valor } from './ProductCardStyle'


export function ProductCard(props) {
    return(
        <ProductCardStyle>
            <Img src={props.produto.image} />
            <Nome>{props.produto.name}</Nome>
            <Valor>{props.produto.price}</Valor>
            <Button> Adicionar ao Carrinho </Button>
            
        </ProductCardStyle>
    )
}