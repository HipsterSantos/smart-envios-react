import React from "react";
import styled from "styled-components";
import Router from './routes';
import SidebarPage from './pages/SidebarPage';
import EntradaSimulador from './pages/InputSimulatorPage';
import SaidaSimulador from './pages/OutcomeSimulatorPage';
import FreteContext from './contexts/freteContext';
import './global.css';
const DashboardContainer =  styled.div`
  display:flex;
  width: 100%;
  height: 100%;

`;

const SidebarContainer = styled.div`
  flex:1;
  height: 100%;
  width: 256px;
  background: linear-gradient(168deg,#FCA679 70%,#FF6262 100%);
`;

const DashboardBody = styled.div`
   flex:4;
   display:flex;
   padding: 2em 1.5em;
   &> * {
     margin-left:.6em;
   }
   &>*:nth(1){
     flex:2.5;
   }
   &>*:nth(2){
     flex:2;
   }
`;

const App = () => {
  const {REACT_APP} = process.env;
  console.log('ENv ',REACT_APP);
  return (

    <DashboardContainer>

      <SidebarContainer>
        <SidebarPage/>
      </SidebarContainer>
      <DashboardBody>
        <EntradaSimulador/>
        <SaidaSimulador/>
      </DashboardBody>

    </DashboardContainer>
  )
}

export default App;
