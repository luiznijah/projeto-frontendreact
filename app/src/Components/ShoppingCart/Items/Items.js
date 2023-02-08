import React from "react";
import { ItemsStyled, Button } from "./ItemsStyle";

export function Items() {


    return(
        <ItemsStyled>
            <p>1x</p>
            <h4>nome do produto</h4>
            <Button> Remover </Button>
        </ItemsStyled>
    )
}