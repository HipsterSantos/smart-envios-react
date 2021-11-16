import React,{useEffect,useState} from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
import styled from 'styled-components';
import SmartLogo from '../assets/SmartLogo';

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;

    padding:2em;
    & > *{
      margin-top:1em;
      text-decoration: none;
      color: #fff;
      font-size: 14pt;
      font-family: Helvetica;
      padding:1em 3em;
    }
    /* & > *:hover{
      background: #b76620;

    } */

`;

const Logo = styled.div`
margin:.2em auto;

`;
const Divider = styled.div`
  width: 225px;
  background: #d57b58;
  align-items: center;
  padding: 0.1em;
  margin: 1em auto;
`;
const SidebarPage = ()=>{
  return(
    <Container>
    <Logo>
      <SmartLogo/>
    </Logo>
    <Divider/>
    <BrowserRouter>
      <Link to="simulador-frete">
        Simulador de frete
      </Link>
      </BrowserRouter>
    </Container>
  )
}

export default SidebarPage;
