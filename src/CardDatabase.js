import { magicCardFromIndex } from './MagicCard';
const database = require('./birthday_sorted.json');

//2020-07-11: The Epoch Year will be the starting year to generate db/lists from. 
// so if someone was born in 1985, their pools from 1985-EPOCH_YEAR will all be generated from available cards
// at the time of the epoch. So eventually, Setting epoch to 2020, but might test with 2010 or something to ensure correct
// functionality
const EPOCH_YEAR = 2020;

/* get an object with the card name, set, date, and image URL */
export function getCardInfo(index) {
    let rawCard;
    let cardName;
    let cardSet;
    let cardDate;
    let cardURL;

    if (index > database.cards.length) {
        console.log(`Invalid card index ${index}...`);
        return null;
    }

    rawCard = database.cards[index];
    cardName = rawCard[0];
    cardSet = rawCard[1];
    cardDate = rawCard[2];
    cardURL = rawCard[3];

    return { name: cardName, set: cardSet, date: cardDate, image: cardURL };
}

export function getRandomCards(count, seed, year=EPOCH_YEAR) {
    let seedrandom = require('seedrandom');
    let rng = seedrandom(seed);
    let max = cardCount(year);

    let cards = new Array(count).fill(undefined);
    cards.forEach((_, index, self) => {
        // rng() does not affect global Math.Random() rng
        // observation: rng seems to result in mannny of the same cards. Could be a nonexistant pattern *shrug*
        self[index] = magicCardFromIndex(Math.floor(rng() * max), index);
    });

    return cards;
}

export function cardCount(year=EPOCH_YEAR) {
    if (year > EPOCH_YEAR) {
        // do something
    }

    return database.cards.length;
}

