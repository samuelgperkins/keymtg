import React, { Component } from 'react';
import './App.css';
import { CardPool } from './CardPool';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            cardPool: <div></div>,
        };

        this.generateCardPool = this.generateCardPool.bind(this);
    }

    generateCardPool () {
        let bday = document.getElementById('bday_field').value;
        console.log(`New card pool for ${bday}`);
        this.setState({
            cardPool: <CardPool user_bday={bday} />
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
            {this.state.cardPool}
        </div>
        );
    }
}

export default App;
