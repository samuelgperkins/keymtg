import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRandomCards } from './CardDatabase';

const CARD_POOL_DEAFULT_SIZE = 45;

export class CardPool extends Component {
    constructor (props) {
        super(props);

        this.user_bday = props.user_bday;

        if (props.year === undefined) {
            //this.year = new Date().getFullYear();
            this.year = '2020-07-23'
            //toying with a solution that can take full dates. Grandfathering in
            //today's date
        } else {
            this.year = props.year;
        }

        if (props.size === undefined || parseInt(props.size) <= 0 || props.size == '') {
            this.size = CARD_POOL_DEAFULT_SIZE;
        } else {
            this.size = props.size;
        }

        //just make it a damn int here
        this.size = parseInt(this.size);

        this.cards = getRandomCards(this.size, this.user_bday, this.year);
    }

    render () {
        return (
        <div>
            <p>{this.year} pool for {this.user_bday}</p>

            <ol>
            {
                this.cards.map((card) => {
                    return <li key={card.key}>{card}</li>
                })
            }
            </ol>
        </div>
        );
    }
}

CardPool.propTypes = {
    user_bday: PropTypes.string.isRequired,
    year: PropTypes.string,
    size: PropTypes.number,
}
