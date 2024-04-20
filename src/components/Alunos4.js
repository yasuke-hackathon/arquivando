import React from "react"
import {Table, Button, Form} from "react-bootstrap";

class Alunos extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            id: 0,
            nome: '',
            email: '',
            alunos : [
                {'id': 1, 'nome': 'Lucas HackathAN', 'email': 'lucas.hackathan@hackathan.com'},
                {'id': 2, 'nome': 'Carlos HackathAN', 'email': 'carlos.hackathan@hackathan.com'},
                {'id': 3, 'nome': 'Aloana HackathAN', 'email': 'aloana.hackathan@hackathan.com'},
                {'id': 4, 'nome': 'Novo HackathAN', 'email': 'novo.hackathan@hackathan.com'}
            ],
            modalAberta: true
        }
    }

    renderTabela(){
        return <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Opções</th>
                </tr>
                
            </thead>
            <tbody>

                {
                    this.state.alunos.map((aluno) =>
                        <tr>
                            <td> {aluno.nome } </td>
                            <td> {aluno.email } </td>
                            <td> 
                                <Button variant="secondary" onClick={() => this.carregarDados(aluno.id)}>Atualizar</Button> / 
                                <Button variant="danger" onClick={() => this.deletarAluno(aluno.id)}>Excluir</Button> 
                            </td>
                        </tr>
                    )
                }
                <tr>
                    <td> 🥇 { this.state.alunos[0].nome } </td>
                    <td> { this.state.alunos[0].email } </td>
                    <td> Atualizar / Excluir </td>
                    <td> Atualizar / Excluir </td>
                </tr>

                <tr>
                    <td> 🥈 {this.state.alunos[1].nome} </td>
                    <td> {this.state.alunos[1].email} </td>
                    <td> Atualizar / Excluir </td>
                    <td> Atualizar / Excluir </td>
                </tr>

                <tr>
                    <td> 🥉 {this.state.alunos[2].nome} </td>
                    <td> {this.state.alunos[2].email} </td>
                    <td> 🚨 </td>
                    <td> Atualizar / Excluir </td>
                </tr>
            </tbody>
        </Table>
        

        atualizaNome = (e) => {
            this.setState(
                {
                    nome: e.target.value
                }
            )
        }

        atualizaEmail = (e) => {
            this.setState(
                {
                    email: e.target.value
                }
            )
        }

        submit = () => {

            if(this.state.id == 0){
                const aluno = {
                    nome: this.state.nome,
                    email: this.state.email
                }

                this.cadastraAluno(aluno);
            } else{
                const aluno = {
                    id: this.state.id,
                    nome: this.state.nome,
                    email: this.state.email
                }
                this.atualizarAluno(aluno);
            }
        }

        reset = () => {
            this.setState(
                {
                    id: 0,
                    nome: '',
                    email: ''
                }
            )
        }

        render() {
            return (
                <div>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="text" value={this.state.id} readOnly={true} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu Nome" value={this.state.nome} onChange={this.atualizarNome} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite o email do aluno" value={this.state.email} onChange={this.atualizaEmail} />
                            <Form.Text className="text-muted">
                                Utilize o seu melhor e-mail.
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="primary" onClick={this.submit}>
                            Salvar
                        </Button>
                        <Button variant="warning" onClick={this.reset}>
                            Novo
                        </Button>
                        </Form>

                </div>
            )
        }
    }
}

export default Alunos;