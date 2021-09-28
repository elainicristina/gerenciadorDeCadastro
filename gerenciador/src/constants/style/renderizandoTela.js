import styled from "styled-components";

export const Tela = styled.div ` 
    width: 900px;
    margin: 50px auto 0 auto;
    @media screen and (min-width: 375px) and (max-width: 500px){
        width: 350px;
    }
`

export const ButtonSalvar = styled.div `
    display: flex;
    justify-content: center;
    @media screen and (min-width: 375px) and (max-width: 500px){
        margin-top: 20px;
    }
`

export const CenterTable = styled.div `
   
   margin-left: 300px;
   margin-top: 50px;


`

export const Inputs = styled.div `
    display: flex;
    justify-content: center;
    margin: 20px 20px 20px 50px;
    @media screen and (min-width: 375px) and (max-width: 500px){
        margin: 0;
        margin-top: 20px;
    }
    
`

export const InputsSeparados = styled.div`

    margin-right: 50px;
    align-items: center;
    @media screen and (min-width: 375px) and (max-width: 500px){
        margin: 0;
    }

`

export const InputText = styled.div `

    margin-right: 50px;
    margin-left: 30px;
`

export const NomeInicio = styled.h2 `
    text-align: center;
    font-family: 'Roboto';
    margin-top: 20px;
    color: gray;
`

export const Img = styled.img `
    margin: 2px 0 0 20px;
`