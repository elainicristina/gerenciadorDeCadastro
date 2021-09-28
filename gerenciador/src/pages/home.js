import React, { useEffect, useState } from  'react'
import { useHistory } from 'react-router-dom';

import BorderColorIcon from '@material-ui/icons/BorderColor';
import ClearIcon from '@material-ui/icons/Clear';
import TableContainer from '@material-ui/core/TableContainer';
import { LinearProgress } from '@material-ui/core';

import Header from '../components/header';
import { TableStyled, ButtonStyled } from '../constants/style/tableHome';
import { goToAdd, goToEditar, goToDetalhes } from '../routes/cordinator';
import { ButtonNone} from '../constants/style/buttonNone'; 
import {NomeInicio} from '../constants/style/renderizandoTela'
import { PhoneService } from '../services/phone';


const HomePage = () => {

    const history = useHistory();
    const [firstLoad, setFirstLoad] = useState(true)
    const [updateList, setUpdateList] = useState(false)
    const [listaCell, setListaCell] = useState([])
    const [divListaCell, setDivListaCell] = useState(<div ><LinearProgress /></div>)

    const loadCellList = () => {
        if (firstLoad) {
            console.log('Primeiro carregamento de página')

            PhoneService.getPhoneList()
            .then((phoneList) => {
                setListaCell(phoneList);
                buildProductList();
                setFirstLoad(false);
            })
            .catch((error) => {
                console.log(error)
                setFirstLoad(false);
            })
        }
        else if (updateList) {
            console.log('Atualização de página')
            buildProductList();
            setUpdateList(false);
        }
    }

    const deleteCell = (phone) => {
        PhoneService.deletePhone(phone._id)
        .then(() => {
            const phoneIndex = listaCell.indexOf(phone);
            let newListaCell = listaCell;
            newListaCell.splice(phoneIndex, 1)
            
            setListaCell(newListaCell)
            setUpdateList(true);

            alert('Celular excluído com sucesso!')
        })
        .catch ((error) => {
            console.log(error)
            alert('Ocorreu um erro inesperado ao tentar excluir o celular. Tente novamente mais tarde.')
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
        loadCellList();
    })

    return (
        <div>
            <Header/>
            <NomeInicio>
               <strong>Produtos</strong> 
            </NomeInicio>
            <ButtonStyled>
                 <button type="button" 
                 className="btn btn-secondary btn-lg"
                  onClick={() => goToAdd(history)} 
                  > Adicionar
                </button>
            </ButtonStyled>
          

            <TableStyled>
                <TableContainer>

                    <table className="table">
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