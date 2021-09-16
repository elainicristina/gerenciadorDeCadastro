
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png'
import { goToHome } from '../../Routes/Cordinator';
import { useHistory } from 'react-router';
import { Img } from '../style/renderizandoTela';



const Header = () => {
    const history = useHistory()
    
    return (
        <div onClick={() => goToHome(history)}>
        <nav class="navbar navbar-light bg-light">
            <Img src={logo} width="80" height="70" alt="Imagem de celular"/>
        </nav>
        </div>
    )
}

export default Header;