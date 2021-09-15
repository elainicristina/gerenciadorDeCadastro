
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png'
import { goToHome } from '../../Routes/Cordinator';
import { useHistory } from 'react-router';



const Header = () => {
    const history = useHistory()
    
    return (
        <div onClick={() => goToHome(history)}>
        <nav class="navbar navbar-light bg-light">
            <img src={logo} width="50" height="50" alt="Imagem de celular"/>
        </nav>
        </div>
    )
}

export default Header;