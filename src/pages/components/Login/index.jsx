import { Form, Button } from "react-bootstrap"
import App from "../../../App"
import './style.css'
import { useState } from "react";


function Login() {


    return (
        <div className="background">
            <div className="container">
                <div className="sub-container">
                    <div className="img">
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite sua senha email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha aqui" />
                    </Form.Group>
                    <Button variant="primary" size="lg">

                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Login