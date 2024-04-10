import { useEffect, useState } from 'react'
import cahData from '../../../cah-cards.json';
import Card from '../Card/Card'
import './PickRandomWhiteCard.css'

export default function PickRandomWhiteCard() {
    const [randomWhiteCard, setRandomWhiteCard] = useState(null);

    const packs = cahData;

    useEffect(() => {
        function handleGetWhiteCard() {
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
        handleGetWhiteCard()
    }, [])


    return (
        <div className='PickRandomWhiteCard'>
            {/* <button onClick={handleGetWhiteCard}>
                Pick a random white card
            </button> */}
            <Card cardContent={randomWhiteCard} color={'white'} />
        </div>
    )
}