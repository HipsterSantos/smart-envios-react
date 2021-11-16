import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from 'axios';


const freteSchema = yup.object().shape({
  cep_origem:yup.string().required('O CEP de origem é obrigatório'),
  cep_dest:yup.string().required('O CEP de destino é obrigatório'),
  peso: yup.string().required('O peso é Obrigatório'),
  preço: yup.string().required('o preço é obrigatório'),
  quantidade: yup.string().required('a quantidade é Obrigatório'),
  largura: yup.string().required('a largura é Obrigatório'),
  altura: yup.string().required('A altura é Obrigatório')

})

const FormContainer = styled.form`

`;
const FormHeader = styled.div`
  margin-top:2em;
  width:inherit;
`;

const FormFooter = styled.div`
margin:2em 0 ;
`;
const FormBody = styled.div``;
const FormButton = styled.button`
background: #53c953;
color: #fff;
padding: 1em 14em;
border: none;
border-radius: 0.35em;
`;

const FormTextInput = styled.input`
padding: 1em;
border-radius: 0.5em;
border: 1px solid #9d9b9b;
margin-top: 1em
;

`;

const FormNumberInput = styled.input`
padding: 1em;
border-radius: 0.5em;
border: 1px solid #9d9b9b;
margin-top: 1em
;

`;
const FormControl = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:${props=>props.top||1}em;
`;

const Label = styled.span`
    font-size: ${props=>props.size||12}pt;
    margin-top:${props=>props.top || 0}em;
    font-weight: ${props=>props.bold || 0};
`;

const LabelDesc = styled.p`
    font-size: ${props=>props.size||12}pt;
    margin-top:${props=>props.top || 0}em;
    font-weight: ${props=>props.bold || 0};
`;

export default function({output}){

const [cep_origem,setCepOrigem] = useState('');
const [cep_dest,setCepDest]= useState('');
const [peso,setPeso] = useState(0);
const [qqt,setQQT] = useState(0);
const [altura,setAltura] = useState(0);
const [largura,setLargura] =useState(0);
const [price,setPrice] = useState(0);
const [comprimento,setComprimento] = useState(0);
const [length,setLength] = useState(0);
const url = process.env.API_URL;
const token = process.env.API_TOKEN;
console.log('token ',token)
  const handleSubmit = args => {
    const datas = {
      zip_code_start: cep_origem??"14095140",
      zip_code_end: cep_dest??"04120120",
      volumes: [
          {
            height: Number(altura)??0,
            length: Number(length)??0,
            price: Number(price)??0,
            quantity: Number(qqt)??1,
            width: Number(largura)??1,
            weight: Number(peso)??1
        }
      ]
    };

    var myHeaders = new Headers();
    myHeaders.append("token", "eTGXrcTvQetGkYQtMd5mboqikuwy7mhr");
    myHeaders.append("Content-Type", "application/json; charset=utf-8");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(datas),
  };

  fetch("https://hml2.us-east-1.place.log.br/quote/api/quotes/calculate-freight", requestOptions)
    .then(response => response.json())
    .then(outcome => {
      output(outcome.result);
      console.log('=====',outcome)
    })
    .catch(error => console.log('error=====', error));

}



  return(
      <FormContainer onSubmit={handleSubmit}>
        <FormHeader>
          <Label size={10}>You're about to get the better experience ever</Label>
        </FormHeader>
        <FormBody>
          <FormControl>
            <Label>CEP origem</Label>
            <FormTextInput
            type="text"
            placeholder="ex:39192995"
            onChange={e=>setCepOrigem(e.target.value)}/>
          </FormControl>

          <FormControl>
            <Label>CEP destino</Label>
            <FormTextInput
            type="text"
            placeholder="ex:39994995"
            onChange={e=>setCepDest(e.target.value)}
            />
          </FormControl>
          <br/>
          <LabelDesc size={10} top={3}>Dados do volume da mercadoria</LabelDesc>
          <FormControl>
            <Label>Peso</Label>
            <FormNumberInput
             onChange={e=>setPeso(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Label>Quantidade</Label>
            <FormNumberInput
            onChange={e=>setQQT(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Label>Preço</Label>
            <FormNumberInput
            onChange={e=>setPrice(e.target.value)}/>
          </FormControl>

          <FormControl>
            <Label>Largura</Label>
            <FormNumberInput
            onChange={e=>setLargura(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Label>Altura</Label>
            <FormNumberInput
            onChange={e=>setAltura(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <Label>Comprimento</Label>
            <FormNumberInput
            onChange={e=>setLength(e.target.value)}
            />
          </FormControl>

          <FormFooter>
            <FormButton type="button" onClick={handleSubmit}>Calcular</FormButton>
          </FormFooter>

        </FormBody>
      </FormContainer>
  );
}
