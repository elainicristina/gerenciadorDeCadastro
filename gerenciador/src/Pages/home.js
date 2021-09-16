
import React, { useEffect, useState } from  'react'
import { useHistory } from 'react-router-dom';

import BorderColorIcon from '@material-ui/icons/BorderColor';
import ClearIcon from '@material-ui/icons/Clear';
import TableContainer from '@material-ui/core/TableContainer';
import { LinearProgress } from '@material-ui/core';

import Header from '../Constants/heade/heade';
import { TableStyled, ButtonStyled } from '../Constants/style/tableHome';
import { goToAdd, goToEditar, goToDetalhes } from '../Routes/Cordinator';
import { ButtonNone} from '../Constants/style/buttonNone'; 
import {NomeInicio} from '../Constants/style/renderizandoTela'
import { PhoneService } from '../services/phone';


const HomePage = () => {

    const history = useHistory();
    const [listaCell, setListaCell] = useState([])
    const [divListaCell, setDivListaCell] = useState(<div><LinearProgress /></div>)

    const deleteCell = (phone) => {
        PhoneService.deletePhone(phone._id)
        .then(() => {
            const phoneIndex = listaCell.indexOf(phone)
            const newListaCell = listaCell.splice(phoneIndex, 1)
            
            setListaCell(newListaCell)
            setDivListaCell(buildProductList())

            alert('Celular excluído com sucesso!')
        })
        .catch ((error) => {
            console.log(error)
        });
    }

    const buildProductList = () => {
        setDivListaCell(listaCell.map((phone) => {
            return (
                <tr>
                    <td>
                        <ButtonNone onClick={() => goToDetalhes(history, phone._id)}>
                            {phone._id}
                        </ButtonNone>
                    </td>
                    <td>{phone.model}</td>
                    <td>{phone.price}</td>
                    <td>{phone.brand}</td>
                    <td>{phone.color}</td>
                    <td>
                        <ButtonNone onClick={() => goToEditar(history, phone._id)}>
                            <BorderColorIcon/>
                        </ButtonNone>
                        <ButtonNone onClick={() => deleteCell(phone)}>
                            <ClearIcon/>
                        </ButtonNone>
                    </td>
                </tr>
            );
        }))
    }

    useEffect(() => {
        PhoneService.getPhoneList()
        .then((phoneList) => {
            setListaCell(phoneList);
            buildProductList()
        })
        .catch ((error) => {
            console.log(error)
        });
    })

    return (
        <div>
            {Header()}
            <NomeInicio>
               <strong>Produtos</strong> 
            </NomeInicio>
            <ButtonStyled>
                 <button type="button" 
                 class="btn btn-secondary btn-lg"
                  onClick={() => goToAdd(history)} 
                  > Adicionar
                </button>
            </ButtonStyled>
          

            <TableStyled>
                <TableContainer>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Codigo</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Cor</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {divListaCell}
                        </tbody>
                    </table>

                </TableContainer>
            </TableStyled>
        </div>
    )

}

export default HomePage;