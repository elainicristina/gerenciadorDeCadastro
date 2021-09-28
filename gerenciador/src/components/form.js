import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { ButtonSalvar, InputsSeparados, InputText, Inputs } from '../constants/style/renderizandoTela';


const FORM_STYLE = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export const PhoneForm = (props) => (

    <form onSubmit={props.onSubmit}>
        <Inputs>

            <InputsSeparados>          
                <TextField 
                    required
                    label="Modelo"
                    type="text" 
                    variant="outlined"
                    placeholder={"XT2041-1"}
                    InputProps={{inputProps: {
                        minLength: 1, maxLength: 255
                    }}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...props.register("model")}
                />
            </InputsSeparados>
        
            <InputsSeparados>
                <TextField 
                    required
                    label="Marca"
                    type="text" 
                    variant="outlined"
                    placeholder={"Motorola"}
                    InputProps={{inputProps: {
                        minLength: 1, maxLength: 255
                    }}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...props.register("brand")}           
                />
            </InputsSeparados>
                
        </Inputs> 
        <Inputs>

            <InputsSeparados>
                <FormControl variant="outlined" className={FORM_STYLE().formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Cor</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.watch('color') ? props.watch('color') : ''}
                        {...props.register("color")}
                    >
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
                    placeholder={"1.450,00"}
                    InputProps={{inputProps: {
                        min: 0
                    }}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...props.register("price")}
                />
            </InputText>
            
        </Inputs>
        <Inputs>

            <InputsSeparados>
                <TextField 
                    required
                    label="Inicio das vendas"
                    type="date"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...props.register("date")}   
                />
            </InputsSeparados>
            
            <InputsSeparados>
                <TextField
                    required
                    label="Fim das vendas"
                    type="date"
                    variant="outlined"
                    InputProps={{inputProps: {
                        min: props.watch('date')
                    }}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...props.register("endDate")}  
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
)