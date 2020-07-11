import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cardCount} from './CardDatabase';
import { magicCardFromIndex } from './MagicCard';

const CARD_POOL_DEAFULT_SIZE = 45;

export class CardPool extends Component {
    constructor (props) {
        super(props);

        this.user_bday = props.user_bday;

        //2020-07-11: use seedrandom to create seed based on the user's inputted birthday
        var seedrandom = require('seedrandom');
        seedrandom(this.user_bday, { global: true });

        if (props.year === undefined) {
            this.year = new Date().getFullYear();
        } else {
            this.year = props.year;
        }

        if (props.size === undefined || props.size <= 0) {
            this.size = CARD_POOL_DEAFULT_SIZE;
        } else {
            this.size = props.size;
        }

        this.state = {
            cards: [],
        };

        this.generatePool = this.generatePool.bind(this);
    }

    generatePool () {
        let cards = new Array(this.size).fill(undefined);
        console.log(cards);
        console.log(`Loading in ${cards.length} cards from a database of ${cardCount()} cards`);
        cards.forEach((_, index, self) => {
            console.log(`Loading card ${index}`);
            //2020-07-11: use Math.random() influenced by seedrandom and bdate to grab random cards
            // from the database
            self[index] = magicCardFromIndex(Math.floor(Math.random() * cardCount()), index);
        });

        this.setState({
            cards: cards
        });
    }

    componentDidMount () {
        if (this.state.cards.length === 0) {
            this.generatePool();
        }
    }

    render () {
        return (
        <div>
            <p>{this.year} pool for {this.user_bday}</p>

            <ol>{
                this.state.cards.map((card) => {
                    return <li key={card.key}>{card}</li>
                })
            }</ol>
        </div>
        );
    }
}

CardPool.propTypes = {
    user_bday: PropTypes.string.isRequired,
    year: PropTypes.number,
    size: PropTypes.number,
}
