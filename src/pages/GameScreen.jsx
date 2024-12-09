import '../styles/GameScreen.css';
import Cards from '../components/Cards';
import { makeImage } from '../util';

export default function GameScreen() {
    return (
        <div className="GameScreen">
            <Cards images={makeImage()} />
        </div>
    )
}