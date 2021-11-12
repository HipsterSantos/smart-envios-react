import React from "react";

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
