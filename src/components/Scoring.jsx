import '../styles/Scoring.css';

export default function Scoring({ score, turns }) {
    return (
        <div className="Scoring">
            <div className="title1">MATCHY-MATCHY!</div>
            <div className="score">Total Score: {score}</div>
            <div className="turns">Total Turns: {turns}</div>
        </div>
    )
}