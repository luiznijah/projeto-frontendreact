import React from "react";
import { CartStyle } from "./CartStyled";
import { Items } from "../Items/Items";


export function Cart() {


    return(
        <CartStyle>
            <Items/>
            <Items/>
            <Items/>
        </CartStyle>
    )
}