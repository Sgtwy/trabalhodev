import React from "react";
import { Route, Switch } from "react-router-dom";
import Produtos from './pages/Produtos'
import Inicio from './pages/Inicio'
import AdicionarProduto from './pages/AdicionarProduto'
import DetalhesProdutos from './pages/DetalhesProdutos'
import EditarProdutos from "./pages/EditarProdutos";


export default function Routes() {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/produto' component={Produtos} />
                <Route path='/adicionar' component={AdicionarProduto} />
                <Route path='/detalhes/:id' component={DetalhesProdutos} />
                <Route path='/editar/:id' component={EditarProdutos} />
            </Switch>

        </>
    )
}