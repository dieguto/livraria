import React, {Component,Fragment} from 'react';
import InputFormulario from './componentes/inputFormulario'
import InputBotao from './componentes/Botao'
import $ from 'jquery';
import TrataErros from './TrataErros'
import PubSub from 'pubsub-js';
import Headers from './Header'

export class FormularioAutor extends Component{
    
    constructor(){
        super();
        this.state = {nome:'', email:'', cidade:''};
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setCidade = this.setCidade.bind(this);
        this.enviarForm = this.enviarForm.bind(this);
    }

    setNome(event){
        this.setState({nome:event.target.value});
        console.log(this.state.nome)
    }

    setEmail(event){
        this.setState({email:event.target.value});
    }

    setCidade(event){
        this.setState({cidade:event.target.value});
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
                    nome:this.state.nome,
                    email:this.state.email,
                    cidade:this.state.cidade
                }
            ),
            success: function(resposta){

                this.props.atualizarLista(resposta)
                    // nome: this.setNome,
                    // email: this.setEmail,
                    // cidade: this.setCidade})
                 // bind = ligar/ ele está dizendo que está usando o this de fora, e não do ajax
            }.bind(this),
            error:function(resposta){
                // console.log("Ocorreu um erro na conexão")
                // console.log(resposta)
                // alert(resposta.responseJSON)
                // console.log(resposta.responseJSON)

                if (resposta.status === 400){
                    // alert("erro no cliente")
                    new TrataErros().publicaErros(resposta.responseJSON);
                }
            },
            beforeSend: function(){
                PubSub.publish("limpar-erros",{})
            } 

        });
    }
    
    render(){
        return(
                <div className="pure-form pure-form-aligned">
                        <h1>Cadastro de Autores</h1>
                    <form className="pure-form pure-form-aligned" onSubmit={this.enviarForm} method="post">
                        <InputFormulario 
                        id="nome" 
                        type="text" 
                        name="nome" 
                        value={this.state.nome} 
                        onChange={this.setNome}
                        label="Nome:"
                        >
                        
                        
                        
                        </InputFormulario>
                        
                        <InputFormulario 
                        id="email" 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.setEmail}
                        label="E-mail:">
                        </InputFormulario>
                        
                        <InputFormulario 
                        id="cidade" 
                        type="text" 
                        name="cidade" 
                        value={this.state.cidade} 
                        onChange={this.setCidade}
                        label="Cidade:">
                        </InputFormulario>

                        <InputBotao
                        id="gravar"
                        className="pure-button pure-button-primary"
                        type="submit"
                        label="Gravar"
                        >
                        
                        </InputBotao>
                    </form>
                </div>
        );
    }
}

export class TabelaAutores extends Component{
    
    render(){
        return(
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
                            this.props.lista.map(autor =>{
                                return(
                                    <tr key={autor.id}>
                                        <td>{autor.nome}</td>
                                        <td>{autor.email}</td>
                                    </tr>
                                );
                            })
                                
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export class AutorBox extends Component{
    constructor(){
        super();
        // state = é o estado que a variavel se encontra
        this.state = {lista:[]};
        this.atualizarListagem = this.atualizarListagem.bind(this);
        
    }
    componentDidMount(){
        console.log("didmontou");
        $.ajax({
            url: 'http://localhost:8080/autores',
            dataType:'json',

            success: function(resposta){
                this.setState({lista:resposta});
                 // bind = ligar/ ele está dizendo que está usando o this de fora, e não do ajax
            }.bind(this),
            error:function(resposta){
                console.log("Ocorreu um erro na conexão")
                console.log(resposta)
            }   
        });
    }

    //
    atualizarListagem(novaLista){
        this.setState({lista:novaLista});
    }

    render(){
        return(
            <Fragment>
                <Headers titulo="Cadastre os autores"></Headers>
                <FormularioAutor atualizarLista={this.atualizarListagem}/>
                <TabelaAutores lista={ this.state.lista }/>
            </Fragment>
            
        );
    }
}


