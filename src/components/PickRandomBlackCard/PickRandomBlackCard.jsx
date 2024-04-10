import { useState } from 'react'
import cahData from '../../../cah-cards.json';
import Card from '../Card/Card'
import './PickRandomBlackCard.css'

export default function PickRandomBlackCard() {
    const [randomBlackCard, setRandomBlackCard] = useState(null);

    const packs = cahData;

    function handleGetBlackCard() {
        let blackCards = [];
        for (const pack of packs) {
            if (pack.black && pack.black.length > 0) {
                blackCards = blackCards.concat(pack.black);
            }
        }
        if (blackCards.length > 0) {
            const randomBlackCard = blackCards[Math.floor(Math.random() * blackCards.length)];
            setRandomBlackCard(randomBlackCard.text);
        } else {
            setRandomBlackCard('No black cards available');
        }
    }

    return (
        <div className='PickRandomBlackCard'>
            <button onClick={handleGetBlackCard}>
                Pick a random black card
            </button>
            <Card cardContent={randomBlackCard} />
        </div>
    )
}