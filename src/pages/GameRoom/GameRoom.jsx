import Card from '../../components/Card/Card'
import './GameRoom.css'

export default function GameRoom() {

    return (
        <section className="GameRoom">
            <h1>Are you ready for this?</h1>
            <div className='card-hand'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}