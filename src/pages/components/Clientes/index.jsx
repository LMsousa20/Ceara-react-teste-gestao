import Table from 'react-bootstrap/Table';
import React from 'react';



async function produtos() {

    let reqClient = await fetch('https://xpcoin.onrender.com/users')
    let repClient = await reqClient.json()
    let listaClient = "";
    console.table(repClient)
    repClient.forEach((item) => {
        listaClient += `
      <tr>
      <td>${item.idcliente}</td>
      <td>${item.cpf}</td>
      <td>${item.nome.toUpperCase()}</td>
      <td>${item.qntd_pontos}</td>
    </tr> 
  
        `
    }
    )
    document.getElementById('sub-lista-cliente').innerHTML = listaClient;
  
  }
  
  function Clientes(){
    produtos()
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>COD</th>
            <th>CPF</th>
            <th>Nome</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody id="sub-lista-cliente">
          
        </tbody>
      </Table>
    );
  }
  

export default Clientes