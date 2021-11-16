import React,{useState,useEffect } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width:100%;
  height:100%;
  border-left:1.2px solid #dedede;
  padding-left:1em;
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
const Sylabus = styled.div`
margin-top:2em;
padding:2em;
.blank_{
  animation: bl .3s infinite;
  transition:all easy-in .3s;
}
@@keyframes bl {
  0%{
    opacity:0;
  }
  50%{
    opacity:1;
  }
}
`;

const SaidaSimulador = (props) =>{
  const {sendDataInside} = props;
    return (
      <Container>
      <Header>
        <Label size={24} bold="bold">Resultado do seu pedido</Label>
      </Header>
      <Sylabus>
      {sendDataInside?(<></>):(<>
        <p className="blank_">Currently working on it ...</p>
        </>)}
      </Sylabus>
      </Container>
    )
}


export default SaidaSimulador;
