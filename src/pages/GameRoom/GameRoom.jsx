import CardFront from '../../components/CardFront/CardFront'
import './GameRoom.css'

export default function GameRoom() {

    return (
        <section className="GameRoom">
            <h1>Are you ready for this?</h1>
            <div className='card-hand'>
                <CardFront/>
                <CardFront />
                <CardFront />
                <CardFront />
                <CardFront />
                <CardFront />
            </div>
        </section>
    )
}