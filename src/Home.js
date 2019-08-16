import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    render(){
        return(
            <div>
                <h1>Bem vindo!!</h1>
                <hr/>
                
            </div>
        );
    }
}

export default class HomeBox extends Component{
    render(){
        return(
            <div>
                <Header titulo="Home" subtitulo="Está é a home!"/>
                <Home/>
            </div>
        );
    }
}