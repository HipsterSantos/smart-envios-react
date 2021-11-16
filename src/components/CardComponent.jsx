import React,{useState,useEffect} from 'react';

const CardContainer = styled.div`
display:flex;
flex-direction:column;
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
   }
`;

const Label = styled.span`
  font-size: ${props=>props.size||13}px;
  margin-top:${props=>props.top || 0}em;
  font-weight: ${props=>props.bold || 0};
  color: ${props=>props.color || '#000'};
`;

export default function CardComponent(props){
  return (
    <CardContainer>
      <CardHeader>
        <Label>Service:{props.serviceName || 'Buslog'}</Label>
        <Label>Dias Uteis:
          <Label color={props.days>3?"#E8B056":"#73EB8A"}>{props.days || 4}</Label>
        </Label>
      </CardHeader>
      <CardBody>
        <Label size={14}> Valor: {props.price || '0.99$'}</Label>
      </CardBody>
      <CardFooter>
        <Badge type="expresso">Expresso</Badge>
      </CardFooter>
    </CardContainer>
  )
}
