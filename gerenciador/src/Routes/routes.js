import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../Pages/home";
import AdicionarPage from '../Pages/adicionar'
import EditarPage from "../Pages/editar";
import DetalhesPage from '../Pages/detalhes'

const Routes = () => {
    return (
         <BrowserRouter>

        <Switch>
            <Route exact path={"/"} >
                <HomePage/> 
            </Route>

            <Route path={"/adicionar"}  >

                <AdicionarPage/>
            </Route>

            <Route path={"/editar"} exact>
                <EditarPage/>
            </Route>

            <Route path={"/detalhes/:id"} exact >
                <DetalhesPage/>
            </Route>

        </Switch>
    </BrowserRouter>
    )
   
}

export default Routes;
