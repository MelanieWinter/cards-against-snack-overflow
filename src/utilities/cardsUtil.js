import cahData from '../../../cah-cards.json';

export function handleCardDealer() {

}

const packs = cahData;

export function handleGetWhiteCard() {
    let whiteCards = [];
    for (const pack of packs) {
        if (pack.white && pack.white.length > 0) {
            whiteCards = whiteCards.concat(pack.white);
        }
    }
    if (whiteCards.length > 0) {
        const randomWhiteCard = whiteCards[Math.floor(Math.random() * whiteCards.length)];
        setRandomWhiteCard(randomWhiteCard.text);
    } else {
        setRandomWhiteCard('No white cards available');
    }
}