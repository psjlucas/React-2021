import React, { useState, useEffect } from 'react'
import ReducerHook from './reducer';

function App() {

  const [numero, setNumero] = useState('')
  const [segundoNumero, setSegundoNumero] = useState('')
  const [resultado, setResultado] = useState('');

  const somar = () =>{
    const numeroInt = parseInt(numero)
    const segNumeroInt = parseInt(segundoNumero)
    setResultado(numeroInt + segNumeroInt)
  }

  useEffect( () => {
    console.log('variavel numero: ', numero)
  } , [numero] )

  return (
    <ReducerHook>
    
    </ReducerHook>
  );
}

export default App;
