import React,{createContext} from 'react';
import { BrowserRouter,Routes, Redirect, Route, Switch } from "react-router-dom";
import EntradaSimulador from './pages/InputSimulatorPage';
import SaidaSimulador from './pages/OutcomeSimulatorPage';
import FreteContext from './contexts/freteContext';

export default function RouteModule(){
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="simulador-frete" component={EntradaSimulador}>
              </Route>
              <Route exact path="resultado-simulador-frete" component={SaidaSimulador}>
              </Route>
        </Routes>
    </BrowserRouter>
  )
}
