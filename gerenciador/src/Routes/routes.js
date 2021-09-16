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
                <Route exact path="/" >
                    <HomePage/> 
                </Route>

                <Route exact path={"/adicionar"}  >

                    <AdicionarPage/>
                </Route>

                <Route exact path={"/editar/:id"} component={EditarPage} />

                <Route exact path={"/detalhes/:id"} component={DetalhesPage}/>
                
                
            </Switch>
        </BrowserRouter>
    )
   
}

export default Routes;
