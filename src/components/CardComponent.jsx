import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display:flex;
box-shadow: 1px 3px 19px rgba(0,0,0,.2);
padding:1em .5em;
border-radius:.8em;
height: 125px;
width: 514px;
&>*{
  display:flex;
  margin-top:1.5em;
  flex-direction: column;
}
`;

const CardBody = styled.div`
display:flex;
`;

const CardFooter = styled.div`
display:flex;
`;

const CardHeader = styled.div`
display:flex;
.day{
  margin-left: auto;
  margin-right:2em;
}
.day-numbered{
  margin-left:5em;
}


`;

const Badge = styled.span`
   ${props=>props.type &&
     props.type=="expresso"?
     'background:#8DD0FA':
     'background: #E8B056'
   };
`;

const Label = styled.p`
  font-size: ${props=>props.size||13}pt;
  margin-top:${props=>props.top || 0}em;
  font-weight: ${props=>props.bold || 0};
  color: ${props=>props.color || '#000'};
`;

export default function CardComponent(props){
  const {payload} = props;
  return (
    <CardContainer>
      <CardHeader>
        <Label bold="bold">Serviço:{payload.service || 'Buslog'}</Label>
        <Label bold="bold" className="day">Dias Uteis:
          <Label bold="bold" className="day-numbered" size={14} color={payload.days>3?"#E8B056":"#73EB8A"}>{payload.days || 4}</Label>
        </Label>
      </CardHeader>
      <CardBody>
        <Label size={14}> Valor: {payload.value || '0.99$'}</Label>
      </CardBody>
      <CardFooter>
        {
          payload && payload.days<3 &&
          <Badge type={payload.days< 3 && "expresso"}>Expresso</Badge>
        }
        {payload && payload.value <10 &&
          <Badge type={payload.value <10 && "economic"}>Economico</Badge>
        }
      </CardFooter>
    </CardContainer>
  )
}
