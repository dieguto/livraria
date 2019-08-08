import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import $ from 'jquery';
import './css/side-menu.css';
import './css/pure-min.css';

class App extends Component {

    constructor(){
        super();
        // state = é o estado que a variavel se encontra
        this.state = {lista:[]};
    }
 
    componentDidMount(){
        console.log("didmontou");
        $.ajax({
            url: 'http://localhost:8080/autores',
            dataType:'json',

            success: function(resposta){

                this.setState({lista:resposta});
                 // bind = ligar/ ele está dizendo que está usando o this de fora, e não do ajax
            // }.bind(this)
            }.bind(this),
            error:function(resposta){
                console.log("Ocorreu um erro na conexão")
            }   
        });
    }

    componentWillMount(){
        console.log("componente começou a se montar");
        // this.state = {lista:[
        //     {nome:'João da silva', email:'joao@uol.com.br', cidade:'Osasco'},
        //     {nome:'Marquinhos', email:'marquieni@terra.com.br', cidade:'Barueri'}
        // ]};
    }


    enviarForm(event){
        // cancelar o evento padrão de submissão
        event.preventDefault();
        console.log("Enviando dados para o banco...")


        // requisição para o servidor db
        $.ajax({
            url: 'http://localhost:8080/autores',
            contentType: 'application/json',
            //tipo de dados que estão sendo passados "json"
            dataType:'json',
            //tipo da requisição
            type: 'post',
            data: JSON.stringify(
                {
                    nome:'', email:'', cidade:''
                }
            )

        });
    }

    

    render(){
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>
        
                <Menu/>
        
                <div id="main">
        
                    <Header/>
        
                    <div className="content">
                        <h1>Cadastro de Autores</h1>

                        <div className="pure-form pure-form-aligned">
                            <form className="pure-form pure-form-aligned" onSubmit={this.enviarForm} method="post">
                                <div className="pure-control-group">
                                    <label htmlFor="nome">Nome:</label>
                                    <input id="nome" type="text" name="nome" value=""/>
                                </div>
                                <div className="pure-control-group">
                                    <label htmlFor="email">E-Mail:</label>
                                    <input id="email" type="email" name="email" value=""/>
                                </div>
                                <div className="pure-control-group">
                                    <label htmlFor="cidade">Cidade:</label>
                                    <input id="cidade" type="text" name="cidade" value=""/>
                                </div>
                                <div className="pure-control-group">
                                    <label></label>
                                    <button className="pure-button pure-button-primary" type="submit">Gravar</button>
                                </div>
                            </form>
                        </div>

                        <div>
                            <table className="pure-table pure-table-bordered">
                                <thead>
                                    <tr>
                                        <td>nome</td>
                                        <td>email</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.lista.map(autor =>{
                                            return(
                                                <tr>
                                                    <td>{autor.nome}</td>
                                                    <td>{autor.email}</td>
                                                </tr>
                                            );
                                        })
                                            
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
