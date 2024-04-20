import React from "react"
import {Table, Button, Form} from "react-bootstrap";

class Alunos extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            alunos : [
                {'id': 1, 'nome': 'Lucas HackathAN', 'email': 'lucas.hackathan@hackathan.com'},
                {'id': 2, 'nome': 'Carlos HackathAN', 'email': 'carlos.hackathan@hackathan.com'},
                {'id': 3, 'nome': 'Aloana HackathAN', 'email': 'aloana.hackathan@hackathan.com'},
                {'id': 4, 'nome': 'Novo HackathAN', 'email': 'novo.hackathan@hackathan.com'}
            ]
        }
    }

    render(){
        return(
            <Table striped bordered hover>
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
                </tr>

                <tr>
                    <td> 🥈 {this.state.alunos[1].nome} </td>
                    <td> {this.state.alunos[1].email} </td>
                </tr>

                <tr>
                    <td> 🥉 {this.state.alunos[2].nome} </td>
                    <td> {this.state.alunos[2].email} </td>
                    <td> 🚨 </td>
                    <td> Atualizar / Excluir </td>
                </tr>
            </tbody>
        </Table>
        )
        
    }
}

export default Alunos;