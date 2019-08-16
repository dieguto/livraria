import React, { Component } from 'react';
import {Link} from 'react-router';

class Menu extends Component{
    render(){
        return(
            <div id="menu">
                <div className="pure-menu">
                    <Link className="pure-menu-heading" to="/">Empresa</Link>
        
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                        <li className="pure-menu-item"><Link to="/autores" className="pure-menu-link">Autores</Link></li>
                        <li className="pure-menu-item"><Link to="/livros" className="pure-menu-link">Livros</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
    
}

export default Menu;