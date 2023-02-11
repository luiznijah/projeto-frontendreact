import React from "react";
import { CartStyle } from "./CartStyled";
import { Items } from "../Items/Items";


export function Cart(props) {


    return(
        <CartStyle>
            <h2>Cart</h2>
            <Items
            name={props.name}
            />
            
        </CartStyle>
    )
}










// import { useState } from "react";
// import {
//   InputContainer,
//   ListaContainer,
//   ListaTarefasContainer,
//   Tarefa,
//   TaskInput,
//   AddTaskButton,
//   RemoveButton,
//   LinhaHorizontal
// } from "./CartStyled";
// import bin from "../../../assets/bin.png";
// import TarefasCompletadas from "../TarefasCompletadas/TarefasCompletadas";

// export function Cart() {
//   const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
//   const [novaTarefa, setNovaTarefa] = useState("");
//   const [listaTarefasApagadas, setListaTarefasApagadas] = useState([]);

//   const onChangeTarefa = (event) => {
//     setNovaTarefa(event.target.value);
//   };

//   const adicionaTarefa = () => {
//     const novaLista = [...lista, novaTarefa];
//     setLista(novaLista);
//     setNovaTarefa("");
//   };

//   const adicionaTarefaEnter = (event) =>{
//     if (event.key === "Enter"){
//       const novaLista = [...lista, novaTarefa];
//       setLista(novaLista);
//       setNovaTarefa("");

//     }
//   }

//   const removeTarefa = (tarefa) => {
//     const listaFiltrada = lista.filter((item) => item !== tarefa);
//     setLista(listaFiltrada);
//     listarTarefasApagadas(tarefa)
//   };

//   const listarTarefasApagadas = (tarefa) =>{
//     const novaListaTarefasApagadas = [...listaTarefasApagadas, tarefa]
//     setListaTarefasApagadas(novaListaTarefasApagadas)
//   }

//   return (
//     <ListaTarefasContainer>
//       <InputContainer>
//         <TaskInput
//           placeholder="remove"
//           value={novaTarefa}
//           onChange={onChangeTarefa}
//           onKeyDown={adicionaTarefaEnter}
//         />
//         <AddTaskButton onClick={adicionaTarefa} >Adicionar</AddTaskButton>
//       </InputContainer>
//       <ListaContainer>
//         <ul>
//           {lista.map((tarefa, index) => {
//             return (
//               <Tarefa key={index}>
//                 <p>{tarefa}</p>
//                 <RemoveButton onClick={() => removeTarefa(tarefa)}>
//                   <img src={bin} alt="" width="16px" />
//                 </RemoveButton>
//               </Tarefa>
//             );
//           })}
//         </ul>
//       </ListaContainer>
//       <LinhaHorizontal/>
//       {/* <TarefasCompletadas listaTarefasApagadas={listaTarefasApagadas}>

//       </TarefasCompletadas > */}
//     </ListaTarefasContainer>
//   );
// }
