import React ,{useState,useEffect} from "react";
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
   overflow-y:scrool;
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
  const [data,setData] = useState();
  useEffect(()=>{
    console.log('data is ',data);
  },[data])
  return (

    <DashboardContainer>

      <SidebarContainer>
        <SidebarPage/>
      </SidebarContainer>
      <DashboardBody>
        <EntradaSimulador sendDataOutside={
          function(e){
            setData(e)
          }}/>
        <SaidaSimulador sendDataInside={data}/>
      </DashboardBody>

    </DashboardContainer>
  )
}

export default App;
