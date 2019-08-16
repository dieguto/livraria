import React, { Component } from 'react';
import Menu from './Menu';

import './css/side-menu.css';
import './css/pure-min.css';
// os dois estão entre chaves, por que eles serão inicializados



class App extends Component {

    
 
    

    componentWillMount(){
        // console.log("componente começou a se montar");
        // this.state = {lista:[
        //     {nome:'João da silva', email:'joao@uol.com.br', cidade:'Osasco'},
        //     {nome:'Marquinhos', email:'marquieni@terra.com.br', cidade:'Barueri'}
        // ]};
    }


    

    

    render(){
        return (
            <div id="layout">
                <a href="#menu" id="menuLink" className="menu-link">
                    <span></span>
                </a>
        
                <Menu/>
        
                <div id="main">
        
                    <div className="content">
                        
                    {this.props.children}
                  
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
