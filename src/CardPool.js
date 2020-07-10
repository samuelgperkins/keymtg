import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cardCount } from './CardDatabase';
import { magicCardFromIndex } from './MagicCard';

const CARD_POOL_DEAFULT_SIZE = 45;

export class CardPool extends Component {
    constructor (props) {
        super(props);

        this.user_bday = props.user_bday;

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
            self[index] = magicCardFromIndex(index % cardCount(), index);
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
