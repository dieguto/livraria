import React, {Component} from 'react';

class InputBotao extends Component {
    render(){
        return(
            <div className="pure-control-group">
                <label></label>
                <button className={this.props.className} type={this.props.type}>{this.props.label}</button>
            </div>
        );

    }
}

export default InputBotao;