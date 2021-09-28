import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home";
import AdicionarPage from '../pages/adicionar'
import EditarPage from "../pages/editar";
import DetalhesPage from '../pages/detalhes'

const Routes = () => {

    return (
         <BrowserRouter>

            <Switch>
                <Route exact path="/" >
                    <HomePage/> 
                   
                </Route>

                <Route exact path={"/adicionar"} component={AdicionarPage} />
                <Route exact path={"/editar/:id"} component={EditarPage} />
                <Route exact path={"/detalhes/:id"} component={DetalhesPage}/>                
            </Switch>
        </BrowserRouter>
    )
   
}

export default Routes;
