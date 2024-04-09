import { useState } from 'react';
import cahData from '../../../cah-cards.json';
import './GameLobby.css';

export default function GameLobby() {
    const [randomWhiteCard, setRandomWhiteCard] = useState(null);
    const [randomBlackCard, setRandomBlackCard] = useState(null);

    const packs = cahData;

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
        <section className='GameLobby'>
            <h1>Game Lobby</h1>
            <div className='card-words'>
                <button onClick={handleGetWhiteCard}>
                    Pick a random white card
                </button>
                <p>
                    {randomWhiteCard}
                </p>
            </div>
            <div className='card-words'>
                <button onClick={handleGetBlackCard}>
                    Pick a random black card
                </button>
                <p>
                    {randomBlackCard}
                </p>
            </div>
        </section>
    );
}
