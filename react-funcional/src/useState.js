import React, { useState } from 'react'

function App() {

  const [numero, setNumero] = useState()
  const [segundoNumero, setSegundoNumero] = useState()
  const [resultado, setResultado] = useState();

  const somar = () =>{
    const numeroInt = parseInt(numero)
    const segNumeroInt = parseInt(segundoNumero)
    setResultado(numeroInt + segNumeroInt)
  }

  return (
    <div>
      <input type="text" value={numero} 
                        onChange={ e=> setNumero(e.target.value)}></input>  
                        <br/>
      <input type="text" 
             value={segundoNumero} 
             onChange={ e=> setSegundoNumero(e.target.value)}></input>
             <br/>

      <button onClick={somar}>Somar</button>

      <br/>
      <input type="text" value={resultado}></input>
    </div>
  );
}

export default App;
