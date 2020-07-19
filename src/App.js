import React, { Component } from 'react';
import './App.css';
import { CardPool } from './CardPool';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            seed: null
        };

        this.generateCardPool = this.generateCardPool.bind(this);
    }

    generateCardPool () {
        let bday = document.getElementById('bday_field').value;
        console.log(`New card pool for ${bday}`);
        this.setState({
            seed: bday
        });
    }

    render () {
        return (
        <div>
            <h1>Birthday MTG</h1>
            <label htmlFor="bday_field">Birthday: </label>
            <input type="text" id="bday_field" />
            <button onClick={this.generateCardPool} type="submit">
                Generate
            </button>
            {this.state.seed === null ?
                <div></div> :
                <CardPool user_bday={this.state.seed} size={200} />
            }
        </div>
        );
    }
}

export default App;
