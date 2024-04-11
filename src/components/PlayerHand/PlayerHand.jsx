import { useEffect, useState } from 'react'
import PickRandomWhiteCard from '../../components/PickRandomWhiteCard/PickRandomWhiteCard';
import './PlayerHand.css'

export default function PlayerHand({ cardAmountInHand, handleShowResults, setChosenWhiteCard }) {
    const [currentHand, setCurrentHand] = useState([])

    useEffect(() => {
        function dealCards(dealNumber) {
            const cards = [];
            for (let i = 0; i < dealNumber; i++) {
                cards.push(
                    <PickRandomWhiteCard 
                        key={i} 
                        handleShowResults={handleShowResults} 
                        setChosenWhiteCard={setChosenWhiteCard}
                    />
                )
            }
            setCurrentHand(cards);
        }
        dealCards(cardAmountInHand)
        
    }, [cardAmountInHand]);

    return (
        <div className='PlayerHand'>
            {currentHand.map((card, index) => (
                card
            ))}
        </div>
    )
}