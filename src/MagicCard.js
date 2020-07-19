import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCardInfo } from './CardDatabase';

/* a simple component containing the card info and a URL for searching it up */
export class MagicCard extends Component {
    constructor (props) {
        super(props);

        this.name = props.name;
        this.set = props.set;
        this.date = props.date;
        this.image = props.image;
        this.url = `https://scryfall.com/search?q=${this.name} s:${this.set}`;
    }

    render () {
        return (
        <div>
            {this.name} | {this.set} - (<a href={this.url}>link</a>) <br />
            <img src={this.image} alt={this.name} height="200" />
        </div>
        );
    }
}

MagicCard.propTypes = {
    name: PropTypes.string.isRequired,
    set: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

/* return a new MagicCard component given an index in our database */
export function magicCardFromIndex (index, key = 0) {
    let cardInfo = getCardInfo(index);

    if (cardInfo === null) {
        return null;
    }

    return <MagicCard
        name={cardInfo.name}
        set={cardInfo.set}
        date={cardInfo.date}
        image={cardInfo.image}
        key={key}
    />;
}
