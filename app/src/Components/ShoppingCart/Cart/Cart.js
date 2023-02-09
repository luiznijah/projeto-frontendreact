import React from "react";
import { CartStyle } from "./CartStyled";
import { Items } from "../Items/Items";


export function Cart() {


    return(
        <CartStyle>
            <h2>Cart</h2>
            <Items/>
            <Items/>
            <Items/>
        </CartStyle>
    )
}