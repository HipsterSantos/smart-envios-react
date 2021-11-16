import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display:flex;
box-shadow: 1px 3px rgba(0,0,0,.4);
padding:1em .5em;
`;

const CardBody = styled.div`
display:flex;
`;

const CardFooter = styled.div`
display:flex;
`;

const CardHeader = styled.div`
display:flex;
margin-left: auto;

`;

const Badge = styled.span`
   ${props=>props.type &&
     props.type=="expresso"?
     'background:#8DD0FA':
     'background: #E8B056'
   };
`;

const Label = styled.span`
  font-size: ${props=>props.size||13}px;
  margin-top:${props=>props.top || 0}em;
  font-weight: ${props=>props.bold || 0};
  color: ${props=>props.color || '#000'};
`;

export default function CardComponent(props){
  const {payload} = props;
  return (
    <CardContainer>
      <CardHeader>
        <Label>Serviço:{payload.service || 'Buslog'}</Label>
        <Label>Dias Uteis:
          <Label color={payload.days>3?"#E8B056":"#73EB8A"}>{payload.days || 4}</Label>
        </Label>
      </CardHeader>
      <CardBody>
        <Label size={14}> Valor: {payload.value || '0.99$'}</Label>
      </CardBody>
      <CardFooter>
        {
          payload && payload.days<3 &&
          <Badge type="expresso">Expresso</Badge>
        }
        {payload && payload.value <10 &&
          <Badge type="economic">Economico</Badge>
        }
      </CardFooter>
    </CardContainer>
  )
}
