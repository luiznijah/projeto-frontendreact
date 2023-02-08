import React from "react";
import { HomeStyle } from "./HomeStyle";
import { ProductCard } from "../ProductCard/ProductCard";


export function Home(){


    return(
        <HomeStyle>
            <h1>Home </h1>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </HomeStyle>
    )
}