import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import FreteForm from '../components/FreteForm';

const Container = styled.div`
  width:100%;
  height:100%;
  overflow:scroll;
  font-family:gotham-light;
`;

const Header = styled.div`
  margin-top:2em;
  width:inherit;
`;

const Label = styled.p`
  font-size: ${props=>props.size||13}pt;
  margin-top:${props=>props.top || 0}em;
  font-weight: ${props=>props.bold || 0};
`;
const EntradaSimulador = ()=>{
  return (
    <Container>
    <Header>
      <Label size={14}>Faca simulação de frete ,sem mais de longas</Label>
    </Header>
      <Label
        size={9}
        bold={600}
        top={3}>
      Prencha os campos que seguem e tenha seu resultado em segundo
      </Label>
      <FreteForm/>
    </Container>
  )
}

export default EntradaSimulador;
