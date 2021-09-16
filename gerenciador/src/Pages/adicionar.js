import React from 'react'
import uuid from 'react-uuid'
import { useHistory } from 'react-router';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import useForm from "../Hooks/useForm";
import {goToHome} from '../Routes/Cordinator'
import { Tela, ButtonSalvar, InputsSeparados,InputText, NomeInicio } from '../Constants/style/renderizandoTela';
import { Inputs } from '../Constants/style/renderizandoTela';
import Header from '../Constants/heade/heade';
import { ButtonHome } from '../Constants/style/buttonNone';
import { PhoneService } from '../services/phone';

const AdicionarPage = () => {

    const history = useHistory()

    const [ form, onChange, clear ] = useForm({
        "model":"",
        "brand":"",
        "price":"",	
        "date":"",
        "endDate":"",
        "color":[],
        "code": ""
    })

    const addCell = async () => {
        form.code = uuid()
        let requestError = true;
    
        PhoneService.createPhone(form)
        .then((response) => {
            if (response !== null) {
                requestError = false;
            } 
            clear()
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
    
    const onSubmitForm = (event) => {
        event.preventDefault();
        addCell();
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
               <strong>Adicionar Produto</strong> 
            </NomeInicio>
            <Tela>
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
            </Tela> 
        
        </div>
    )
}

export default AdicionarPage;