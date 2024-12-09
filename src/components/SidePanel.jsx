import "../styles/SidePanel.css"

export default function SidePanel({ score, turns }) {

    return (
        <>

            <div className="SidePanel">
                <div className="titlePanel">
                    <div className="title1">MATCHY-MATCHY!</div>
                </div>

                <div className="scoreTurnPanel">
                    <div className="score">Total Score: {score}</div>
                    <div className="turns">Total Turns: {turns}</div>
                </div>
            </div>

        </>
    )
};
