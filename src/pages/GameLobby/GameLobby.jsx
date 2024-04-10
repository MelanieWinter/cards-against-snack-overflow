import PickRandomBlackCard from '../../components/PickRandomBlackCard/PickRandomBlackCard';
import PickRandomWhiteCard from '../../components/PickRandomWhiteCard/PickRandomWhiteCard';
import './GameLobby.css';

export default function GameLobby() {
    return (
        <section className='GameLobby'>
            <h1>Game Lobby</h1>
            <div className='random-card-picker'>
                <PickRandomBlackCard />
                <PickRandomWhiteCard />
            </div>
        </section>
    );
}
