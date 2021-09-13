/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from  'react'
import axios from "axios";
import {urlBase} from "../Constants/url";
import { headers } from "../Constants/url";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './heade/heade';
import { TableStyled, ButtonStyled } from '../Constants/style/tableHome';
import { goToAdicionar } from '../Routes/coodinator';
import { useHistory } from "react-router-dom"
const HomePage = () => {

    const history = useHistory();


    const [listaCell, setListaCell] = useState([])

    const getLIsta = () => {
        axios.get(`${urlBase}/phone`, {
            headers: headers
        })
        .then((res) => {
            console.log(res.data)
            setListaCell(res.data)
        })
        .catch((error) => alert(error));

    }
        
    const ListaProdutos = listaCell.map((list) => {
        return (
            <div class="table-responsive-xl">

                <table class="table">
                    <tbody>
                        <tr>
                        <td>{list._id}</td>
                        <td>{list.model}</td>
                        <td>{list.price}</td>
                        <td>{list.brand}</td>
                        <td>{list.color}</td>
                        </tr>
                    </tbody>
                </table>
               
           
            </div>
        )
    })

    useEffect(() => {
        getLIsta()
    }, [])

    return (
        <div>
            {Header()}

           <button onClick={()=> goToAdicionar(history)} >Adicionar</button>

            <TableStyled>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Cor</th>
                    </tr>
                </thead>
            </table>
            <div> 
                {ListaProdutos}
            </div>
               
            </TableStyled>
            
        </div>
    )

}

export default HomePage;