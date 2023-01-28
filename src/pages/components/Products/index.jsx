import Table from 'react-bootstrap/Table';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './style.css'


function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nome da Empresa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Cadasto de Produto</h4>
        <p>
        <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cadastrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Products() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>

    <div className='container-products'>
    <ListProducts/>
   
      </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Cadastro de Produtos
      </Button>

      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

async function produtos() {

  let reqProduct = await fetch('https://xpcoin.onrender.com/products')
  let repProduct = await reqProduct.json()
  let listaProdutos = "";
  console.table(repProduct)
  repProduct.forEach((item) => {
      listaProdutos += `
    <tr>
    <td>${item.id_produto}</td>
    <td>Imagem</td>
    <td>${item.name.toUpperCase()}</td>
    <td>${item.value_xpc}</td>
  </tr> 

      `
  }
  )
  document.getElementById('sub-lista-produtos').innerHTML = listaProdutos;

}

function ListProducts(){
  produtos()

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody id="sub-lista-produtos">
        
      </tbody>
    </Table>
  );
}


export default Products