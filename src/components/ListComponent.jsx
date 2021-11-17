import React,{useState,useEffect} from 'react';
import Card from './CardComponent'
import styled from 'styled-components';

const ListContainer = styled.div`
  display:flex !important;
  flex-direction:column !important;
  justify-content:center !important;
  padding:1em;
  &>*{
    margin-top:2em;
    display: flex;
    flex-direction: column;
  }
`;
export default function ListComponent(props){
  const {data} = props;
  return (
    <ListContainer>
      {
        data && data.map((item)=>(
          <Card payload={item}/>
        ))
      }
    </ListContainer>
  )
}
