import { useState } from 'react'
import PlayerHand from '../../components/PlayerHand/PlayerHand'
import PickRandomBlackCard from '../../components/PickRandomBlackCard/PickRandomBlackCard'
import Results from '../../components/Results/Results'
import * as cardUtils from '../../utilities/cardUtils'
import './GameRoom.css'

export default function GameRoom() {
    const [startingHandDealt, setStartingHandDealt] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [chosenWhiteCard, setChosenWhiteCard] = useState()
    const [currentBlackCard, setCurrentBlackCard] = useState()

    // AUTO DEAL CARDS
    const [cardAmountInHand, setCardAmountInHand] = useState([])
    function dealStartingHand() {
        setCardAmountInHand(cardUtils.setHandAmount)
        setStartingHandDealt(true)
    }

    // MANUALLY DEAL CARDS
    // const [cardAmountInHand, setCardAmountInHand] = useState(0)
    // let handAmount = 1
    // function dealStartingHand() {
    //     setCardAmountInHand(prevAmount => prevAmount + handAmount)
    //     handAmount++
    // }

    function handleShowResults() {
        setShowResults(true)
    }

    return (
        <section className="GameRoom">
            { startingHandDealt ? (
                !showResults && 
                    <PickRandomBlackCard 
                        isCard={false}
                        setCurrentBlackCard={setCurrentBlackCard}  
                    />
            ) : (
                <>
                    <h1>Are you ready for this?</h1>
                    <button onClick={dealStartingHand}>
                        Deal Starting Hand
                    </button>
                </>
            )}

            { showResults ? (
                <Results 
                    chosenWhiteCard={chosenWhiteCard} 
                    currentBlackCard={currentBlackCard}
                />
            ) : (
                <PlayerHand 
                    cardAmountInHand={cardAmountInHand} 
                    handleShowResults={handleShowResults}
                    setChosenWhiteCard={setChosenWhiteCard} 
                />
            )} 
        </section>
    )
}