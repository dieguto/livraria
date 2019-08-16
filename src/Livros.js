import React, { Component } from 'react';
import Header from './Header';

class Livros extends Component {
    render(){
        return(
            <div>
                <h2>Este é o conteúdo da página livros</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h2>Nome do Livro</h2>
                            </th>
                            <th>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default class LivrosBox extends Component{
    render(){
        return(
            <div>
                <Header titulo="Livros" subtitulo="Cadastro de livros"></Header>
                <Livros></Livros>
            </div>
        );
    }
}