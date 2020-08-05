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
        let inputSize = document.getElementById('size_field').value;
        let inputYear = document.getElementById('year_field').value;
        console.log(`New card pool for ${bday}`);
        this.setState({
            seed: bday,
            size: inputSize,
            year: inputYear
        });
    }

    render () {
        return (
        <div>
            <h1>Birthday MTG</h1>
            <label htmlFor="bday_field">Birthday: </label>
            <input type="text" id="bday_field" />
            <br></br> 
            <label htmlFor="size_field">Pool Size: </label>
            <input type="text" id="size_field" />
            <i>Defaults to 45 cards</i>
            <br></br>
            <label htmlFor="year_field">Release Date: </label>
            <input type="text" id="year_field" />
            <i>yyy/mm/dd  Currently defaults and supports up to 2020/07/23</i>
            <br></br>
            <button onClick={this.generateCardPool} type="submit">
                Generate
            </button>
            {this.state.seed === null ?
                <div></div> :
                <CardPool user_bday={this.state.seed} size={this.state.size} year={this.state.year} />
            }
        </div>
        );
    }
}

export default App;
