import React from 'react';

function App (props){

  const modificaNome = event =>{
    console.log(event.target.value)
  }
  const criaComboBox = () =>{
    const opcoes = ["SP","PR","MT"]

    const comoboBoxOpicoes = opcoes.map(opcao => <option>{opcao}</option>)
    
    return (
      <select>
        {comoboBoxOpicoes}
      </select>
    )
  }


  
    const MeuComboBox = () => this.criaComboBox()
    return (
      <>
        <input type="text" value={props.nome} onChange={modificaNome} />
        <h1>Hello {props.nome}, sua idade é {props.idade} </h1>
        <MeuComboBox/>
      </>
    )
  }

export default App;