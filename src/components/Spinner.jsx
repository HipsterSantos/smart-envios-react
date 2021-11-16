import React  from 'react';
import styled from 'styled-components';
const Container = styled.div`
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #FCA679;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
`;

const Wrapper = styled.div``;
const First = styled.div`
`;
const Second = styled.div``;
const Spinner = ()=>{
  return (<>
      <Container>
      <Wrapper className="lds-ripple">
        <First></First>
        <Second></Second>
      </Wrapper>
      </Container>
    </>)
}

export default Spinner;
