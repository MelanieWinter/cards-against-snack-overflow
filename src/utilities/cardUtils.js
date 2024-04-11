import cahData from '../../cah-cards.json'

const packs = cahData
let cardsInHand = []
let availableWhiteCards = []
let randomWhiteCard
let setHandAmount = 10
let cardsNeededInHand = 10

function getWhiteCards() {
    for (const pack of packs) {
        if (pack.white && pack.white.length > 0) {
            availableWhiteCards = availableWhiteCards.concat(pack.white)
        }
    }
}
getWhiteCards()
// console.log('AVAILABLE WHITE CARDS -->', availableWhiteCards)

export function pickRandomWhiteCard() {
    if (availableWhiteCards.length > 0) {
        randomWhiteCard = availableWhiteCards[Math.floor(Math.random() * availableWhiteCards.length)].text
    } else {
        randomWhiteCard('No white cards available');
    }
}
// pickRandomWhiteCard()
// console.log('RANDOM WHITE CARD -->', randomWhiteCard)

export function cardDealer() {
    while (cardsNeededInHand > 0) {
        pickRandomWhiteCard()
        cardsInHand.push(randomWhiteCard)
        cardsNeededInHand--
    }
}
// cardDealer()
// console.log('CARDS IN HAND -->', cardsInHand)
// console.log('CARDS NEEDED HAND -->', cardsNeededInHand)