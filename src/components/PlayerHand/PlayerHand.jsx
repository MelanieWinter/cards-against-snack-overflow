import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card';
import * as cardUtils from '../../utilities/cardUtils'
import './PlayerHand.css'

export default function PlayerHand({ cardAmountInHand, handleShowResults, setChosenWhiteCard, currentHand }) {

    return (
        <div className='PlayerHand'>
            {currentHand.map((card, index) => (
                <Card key={index} cardContent={card} />
            ))}
        </div>
    )
}