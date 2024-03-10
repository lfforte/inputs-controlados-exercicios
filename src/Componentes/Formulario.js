import { Form } from "./estiloDoFormulario"

const Formulario = (props) => {

  const submitForm = (event) => {
    event.preventDefault()
    limpaInputs();
    alert('Cartão cadastrado com secesso!')
  }
  const limpaInputs = () => {
    props.setinputTipoPag('');
    props.setinputNumCard('');
    props.setinputNome('');
    props.setinputCvc('');
    props.setinputValidade('');
  }


  return (

    <Form onSubmit={submitForm}>
      <div>
        <select value={props.inputTipoPag} onChange={props.atualizaTipoDePagamento}>
          <option></option>
          <option>Crédito</option>
          <option>Débito</option>
        </select>
      </div>
      <div>
        <label>Name</label><br />
        <input type="text" required="" value={props.inputNome} onChange={props.atualizaNome} /><br />
        <label>Número do Cartão</label><br />
        <input type="number" required="" value={props.inputNumCard} onChange={props.atualizaNumeroCartao} /><br />
        <label>Validade</label><br />
        <input type="date" required="" value={props.inputValidade} onChange={props.atualizaValidade} /><br />
        <label>CVC</label><br />
        <input type="number" required="" value={props.inputCvc} onChange={props.atualizaCvc} /><br />
        <br />
      </div>
      <button>Cadastrar Cartão</button>
    </Form>

  )
}



export default Formulario