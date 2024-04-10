import { useState } from 'react'
import PlayerHand from '../../components/PlayerHand/PlayerHand'
import './GameRoom.css'

export default function GameRoom() {

    // AUTO DEAL CARDS
    const [cardAmountInHand, setCardAmountInHand] = useState([])
    function dealStartingHand() {
        setCardAmountInHand(10)
    }

    // MANUALLY DEAL CARDS
    // const [cardAmountInHand, setCardAmountInHand] = useState(0)
    // let handAmount = 1
    // function dealStartingHand() {
    //     setCardAmountInHand(prevAmount => prevAmount + handAmount)
    //     handAmount++
    // }

    return (
        <section className="GameRoom">
            <h1>Are you ready for this?</h1>
            <button onClick={dealStartingHand}>
                Deal Starting Hand
            </button>
            <PlayerHand cardAmountInHand={cardAmountInHand} />
        </section>
    )
}