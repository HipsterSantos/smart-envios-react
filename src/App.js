import React from "react";
const logger = process.env.API_TOKEN;
console.log('logger value ',logger);
const TesComponent = ()=>{
  return ( <div>
    <h1>Hey , I'm test component </h1>
    </div>)
}

const App = () => (
    <div>
        <h1>Hello React</h1>
        <TesComponent/>
    </div>
);

export default App;
