import React from 'react'
import { urlBase } from '../Constants/url';
import Button from '@material-ui/core/Button';
import { headers } from '../Constants/url';
import axios from 'axios';
import useForm from "../Hooks/useForm";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import uuid from 'react-uuid'
import {goToHome} from '../Routes/Cordinator'
import { useHistory } from 'react-router';

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

    const formatDate = (date) => {
        const [year, mounth, day] = date.split('-')
        const newDate = `${day}/${mounth}/${year}`
        return newDate
    }

    const addCell = async () => {
        form.code = uuid()
        form.date = formatDate(form.date)
        form.endDate = formatDate(form.endDate)
    
        try {
            const response = await axios.post(
                `${urlBase}/phone`, 
                form, 
                {headers: headers}
            )
            alert("deu certo")
            goToHome(history)
            return(response.data)
        }
        catch (error) {
            alert(error.message)
            console.log(error)
        }

    }
        

  

    const onSubmitForm = (event) => {
        event.preventDefault();
        addCell();
        clear();
    }


    return (
        <div>
            <form onSubmit={onSubmitForm}>

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

                <FormControl>
                    
                    <InputLabel id="demo-simple-select-label">Cor</InputLabel>
                    <Select
                    
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
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

                <Button 
                    variant="contained"
                    color="primary"
                    type={"submit"}
                >
                    Entrar
                </Button>

            </form>
        </div>
    )
}

export default AdicionarPage;