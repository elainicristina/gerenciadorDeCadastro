
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


import Header from '../Constants/heade/heade';
import { NomeInicio } from '../Constants/style/renderizandoTela';
import { CenterTable } from '../Constants/style/renderizandoTela';
import { ButtonHome } from '../Constants/style/buttonNone';
import { goToHome } from '../Routes/Cordinator';
import { PhoneService } from '../services/phone';
import { formatDateFromTimestamp } from '../utils/date';


const DetalhesPage = (props) => {

    const [celular, setCelular] = useState({
        date: '--',
        endDate: '--'
    })
    const currentId =  props.match.params.id
    const history = useHistory()

    const chamadaCell = () => {
        PhoneService.getPhone(currentId)
        .then((phone) => {
            setCelular(phone)
        })
        .catch((erro) => {
            alert('Erro durante a obtenção do telefone.')
            console.log(erro)
        })
    }

    useEffect(() => {
        chamadaCell()
    },[])


    return (
        <div>
            <Header/>

            <ButtonHome>

                <Button
                variant="contained"
                color="secundary"
                type={"submit"}
                onClick={() => goToHome(history)}
                >
                voltar
                </Button>
            </ButtonHome>

            <NomeInicio>
                <strong>Detalhes do Produto</strong>
            </NomeInicio>

            <CenterTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Código</TableCell>
                        <TableCell align="right">Modelo</TableCell>
                        <TableCell align="right">Marca</TableCell>
                        <TableCell align="right">Preço</TableCell>
                        <TableCell align="right">Cor</TableCell>
                        <TableCell align="right">Inicios das vendas</TableCell>
                        <TableCell align="right">Fim das vendas</TableCell>
                    </TableRow>
                </TableHead>
                
                <TableHead>
                    <TableRow>
                        <TableCell>{celular.code}</TableCell>
                        <TableCell align="right">{celular.model}</TableCell>
                        <TableCell align="right">{celular.brand}</TableCell>
                        <TableCell align="right">{celular.price}</TableCell>
                        <TableCell align="right">{celular.color}</TableCell>
                        <TableCell align="right">{formatDateFromTimestamp(celular.date)}</TableCell>
                        <TableCell align="right">{formatDateFromTimestamp(celular.endDate)}</TableCell>
                    </TableRow>
                </TableHead>

              
            </CenterTable>

        </div>
    )

}

export default DetalhesPage;