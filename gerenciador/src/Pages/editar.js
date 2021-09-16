import React, { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { goToHome } from '../Routes/Cordinator';
import useForm from '../Hooks/useForm';
import { Inputs } from '../Constants/style/renderizandoTela';
import { useHistory } from 'react-router';
import { NomeInicio } from '../Constants/style/renderizandoTela';
import { ButtonHome } from '../Constants/style/buttonNone';
import Header from '../Constants/heade/heade';
import { ButtonSalvar, InputsSeparados,InputText } from '../Constants/style/renderizandoTela';
import { formatDate, getDateFromTimestamp, formatFromBrToUs } from '../utils/date';
import { PhoneService } from '../services/phone';

const EditarPage = (props) => {
    const history = useHistory()
    const currentId =  props.match.params.id

    const [currentPhone, setCurrentPhone] = useState(null)
    const [form, onChange] = useForm({
        "model": "",
        "brand": "",
        "price": "",	
        "date": "",
        "endDate": "",
        "color": "",
        "code": currentId
    })

    const editPhone = async () => {
        form.date = formatDate(form.date)
        form.endDate = formatDate(form.endDate)
        
        let errorOnRequest = true;

        PhoneService.updatePhone(currentId, form)
        .then((data) => {
            if (data !== null) {
                errorOnRequest = false;
            }
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            form.date = formatFromBrToUs(form.date)
            form.endDate = formatFromBrToUs(form.endDate)

            if (errorOnRequest) {
                alert('Erro durante a atualização do telefone')
            }
            else {
                alert('Telefone atualizado com sucesso!')
            }
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        editPhone();
    }

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 160,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

    const classes = useStyles();

    const loadCurrentPhone = () => {
        PhoneService.getPhone(currentId)
        .then((phone) => {
            setCurrentPhone(phone);

            form.model = phone.model;
            form.brand = phone.brand;
            form.price = phone.price;
            form.color = phone.color;
            form.date = getDateFromTimestamp(phone.date);
            onChange({target: {name: 'endDate', value: getDateFromTimestamp(phone.endDate)}})
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
            <form onSubmit={onSubmitForm}>
                    <Inputs>
                        <InputsSeparados>  
                        
                        <TextField 
                            required
                            label="Modelo"
                            type="text" 
                            variant="outlined" 
                            onChange={onChange}
                            name={"model"} 
                            value={form.model}  
                            placeholder={"XT2041-1"}               
                        />
                    </InputsSeparados>
                    
                    <InputsSeparados>
                        <TextField 
                            required
                            label="Marca"
                            type="text" 
                            variant="outlined" 
                            onChange={onChange}
                            name={"brand"} 
                            value={form.brand}  
                            placeholder={"Motorola"}               
                        />
                    </InputsSeparados>
                    
                    </Inputs>


                
                    <Inputs>
                        <InputsSeparados>
                            <FormControl variant="outlined" className={classes.formControl} >
                        
                            <InputLabel id="demo-simple-select-outlined-label"> Cor </InputLabel>
                            <Select
                            
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={form.color}
                            name={"color"}
                            onChange={onChange}
                            >
                            <MenuItem value={""}></MenuItem>
                            <MenuItem value={"BLACK"}>PRETO</MenuItem>
                            <MenuItem value={"WHITE"}>BRANCO</MenuItem>
                            <MenuItem value={"PINK"}>ROSA</MenuItem>
                            <MenuItem value={"GOLD"}>DOURADO</MenuItem>
                            </Select>
                            </FormControl>
                        </InputsSeparados>

                    <InputText>
                        <TextField
                            required
                            label="Preço"
                            type="number" 
                            variant="outlined" 
                            onChange={onChange}
                            name={"price"} 
                            value={form.price}  
                            placeholder={"1.450,00"}            
                        />
                        </InputText>
                        

                    </Inputs>

                    <Inputs>

                    <InputsSeparados>
                        <TextField  
                            required
                            label="Inicio das vendas"
                            type="date"
                            defaultValue="2021-05-24"
                            variant="outlined" 
                            onChange={onChange}
                            name={"date"} 
                            value={form.date}   
                            InputLabelProps={{
                                shrink: true,
                            }}          
                        />
                    </InputsSeparados>
                        
                    <InputsSeparados>
                        <TextField
                            required
                            label="Fim das vendas"
                            type="date"
                            defaultValue="2021-05-24"
                            variant="outlined" 
                            onChange={onChange}
                            name={"endDate"} 
                            value={form.endDate}   
                            InputLabelProps={{
                                shrink: true,
                            }}          
                        />
                    </InputsSeparados>

                    
                    </Inputs>
                    
                    
                    <ButtonSalvar>
                        <Button 
                        variant="contained"
                        color="primary"
                        type={"submit"}
                        >
                            Salvar
                        </Button>
                    </ButtonSalvar>
                    

                </form>
            </div>
            
            
            </ButtonHome>
           
        </div>
    )
}

export default EditarPage;