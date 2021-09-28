import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';

import { goToHome } from '../routes/cordinator';
import { useHistory } from 'react-router';
import { NomeInicio } from '../constants/style/renderizandoTela';
import { ButtonHome } from '../constants/style/buttonNone';
import Header from '../components/header';
import { formatDate, getDateFromTimestamp, formatFromBrToUs } from '../utils/date';
import { PhoneService } from '../services/phone';
import { PhoneForm } from '../components/form';
import { useForm } from 'react-hook-form';

const EditarPage = (props) => {
    const history = useHistory()
    const currentId =  props.match.params.id

    const { register, formState: { errors }, handleSubmit, watch, setValue } = useForm();

    const editPhone = (form) => {
        let formEdited = form
        formEdited.date = formatDate(form.date)
        formEdited.endDate = formatDate(form.endDate)
        
        let errorOnRequest = true;

        PhoneService.updatePhone(currentId, formEdited)
        .then((data) => {
            if (data !== null) {
                errorOnRequest = false;
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            if (errorOnRequest) {
                alert('Erro durante a atualização do telefone')
            }
            else {
                alert('Telefone atualizado com sucesso!')
            }
        })
    }

    const onSubmit = (data) => {
        console.log(data)
        editPhone(data);
    }

    const loadCurrentPhone = () => {
        PhoneService.getPhone(currentId)
        .then((phone) => {
            setValue('model', phone.model);
            setValue('brand', phone.brand);
            setValue('price', phone.price);
            setValue('color', phone.color);
            setValue('date', getDateFromTimestamp(phone.date));
            setValue('endDate', getDateFromTimestamp(phone.endDate));
            console.log(watch('color'))
        })
        .catch ((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        loadCurrentPhone()
    }, [])

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
            <NomeInicio>
                <strong>Editar Produto</strong>
            </NomeInicio>

            <div>
            <PhoneForm
                register={register}
                onSubmit={handleSubmit(onSubmit)}
                watch={watch}
            />
            </div>
            
            
            </ButtonHome>
           
        </div>
    )
}

export default EditarPage;