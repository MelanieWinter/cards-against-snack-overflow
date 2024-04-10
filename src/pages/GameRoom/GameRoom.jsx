import { useState } from 'react'
import PlayerHand from '../../components/PlayerHand/PlayerHand'
import PickRandomBlackCard from '../../components/PickRandomBlackCard/PickRandomBlackCard'
import './GameRoom.css'

export default function GameRoom() {
    const [startingHandDealt, setStartingHandDealt] = useState(false)

    // AUTO DEAL CARDS
    const [cardAmountInHand, setCardAmountInHand] = useState([])
    function dealStartingHand() {
        setCardAmountInHand(10)
        setStartingHandDealt(true)
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
            { startingHandDealt ?
                <PickRandomBlackCard isCard={false} /> : 
                <h1>Are you ready for this?</h1>
            }

            { !startingHandDealt && 
                <button onClick={dealStartingHand}>
                    Deal Starting Hand
                </button>
            }
            <PlayerHand cardAmountInHand={cardAmountInHand} />
        </section>
    )
}