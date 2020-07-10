const database = require('./temp.json');

/* get an object with the card name and the set */
export function getCardInfo(index) {
    let rawCard;
    let cardName;
    let cardSet;

    if (index > database.cards.length) {
        console.log(`Invalid card index ${index}...`);
        return null;
    }

    /* cards are formatted "<name>|SET" */
    console.log(`Loading card ${database.cards[index]}`);
    rawCard = database.cards[index].split('|');
    cardName = rawCard[0];
    cardSet = rawCard[1];

    return { name: cardName, set: cardSet };
}

export function cardCount() {
    return database.cards.length;
}
