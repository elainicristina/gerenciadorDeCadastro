import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';
import {goToHome} from '../routes/cordinator';
import { NomeInicio } from '../constants/style/renderizandoTela';
import Header from '../components/header';
import {PhoneForm} from '../components/form';
import { PhoneService } from '../services/phone';
import { useForm } from 'react-hook-form';

const AdicionarPage = () => {

    const { register, formState: { errors }, handleSubmit, getValues, watch } = useForm();
    const [ startDate, setStartDate ] = useState('')
    const history = useHistory()

    const addCell = (form) => {
        form.code = uuidv4().slice(0,8)
        let requestError = true;
    
        PhoneService.createPhone(form)
        .then((response) => {
            if (response !== null) {
                requestError = false;
            } 
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            if (requestError) {
                alert('Erro ao inserir o telefone.')
            }
            else {
                alert('Telefone inserido com sucesso!')
            }
        })

    }

    const onSubmit = (data) => {
        console.log(data)
        addCell(data)
    }

    return (
        <div>
            
            <Header/>

            <Button
                onClick={() => goToHome(history)}
                type={"submit"}
            >
                voltar
            </Button>

             <NomeInicio>
                <strong>Adicionar Produto</strong> 
             </NomeInicio>

            <PhoneForm
                register={register}
                onSubmit={handleSubmit(onSubmit)}
                watch={watch}
            />

        </div>
    )
}

export default AdicionarPage;