import React, { useState } from "react";
import { ItemsStyled, Button } from "./ItemsStyle";
import { produtos } from "../../Assents/produtos";


export function Items(props) {
    const [novoItem, setNovoItem] = useState("");
    const [item, setItem] = useState(produtos);


    const onChangeItem = (event) =>{
        setNovoItem(event.target.value)
    }
    const adicionaItem = () => {
        const itemArray = [...item];
        itemArray.push(novoItem.name);
        setItem(itemArray);
    };
    const removeItem = () => {};

    return(
            <ul>
            {item.map((produto)=>{
                console.log(produto)
                return(
                    <ItemsStyled key={produto.id}>
                        <p>{produto.id}x</p>
                        <h4 >{produto.name}</h4>
                        <Button> Remover </Button>
                    </ItemsStyled>
                )
            })}
            </ul>
            
    )
}