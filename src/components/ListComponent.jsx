import React,{useState,useEffect} from 'react';
import Card from './CardComponent'
import styled from 'styled-components';
const ListContainer = styled.div`
  display:flex;
  flex-direction:columns;
  justify-content:center;
  padding:1em;
  &>*{
    margin-top:.8em;
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
