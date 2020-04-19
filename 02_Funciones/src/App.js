import React from 'react';

function HolaMundoF() {
  return (
    <div className="Funcion">
      A Funcion comun
    </div>
  );
}

const HolaMundoPF = () => <div className="FuncionPF">A Funcion Flecha </div>


function App() {
  return (
    <div className="ClaseInicio">
      Llamado a Funciones desde React js:
      <HolaMundoF />
      <HolaMundoPF />
    </div>
  );
}

export default App;
