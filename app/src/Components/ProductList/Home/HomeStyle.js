import styled from "styled-components";

export const HomeStyle = styled.div`
    color: black;
    
    width: 74vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Select = styled.select`
    height: 2.5em;
    width: 12em;
    margin-top: 10px;
    margin-right: 10px;
    grid-row: 1/1;
    justify-self: end;
`;

export const ContainerHome = styled.div`
    color: black;
    background-color: lightcyan;
    width: 76vw;
    display: grid;
    background-image: url("https://http2.mlstatic.com/D_NQ_NP_940514-MLB27976930143_082018-O.jpg");
`;