import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { AutorBox } from './Autor';
import LivrosBox from './Livros';
import HomeBox from './Home';


ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ HomeBox }></IndexRoute>
            <Route path="/livros" component={LivrosBox}/>
            <Route path="/autores" component={AutorBox}/>
        </Route>
    </Router>,
    document.getElementById('root')
 );


