import "../styles/Card.css";

export default function Card({ image, handleClick, uId, isFlipped }) {

    //handles the cardclick and activates the "flip"-isClicked making it true also secures the imageId from that card to pass it to handleClick and then pass it to handleCardClick
    const onCardClick = () => {
        if (!isFlipped) {
            handleClick(uId);
        }
    };

    return (
        <div>
            <div
                className="Card"
                id="card"
                onClick={onCardClick}
                style={isFlipped ? { backgroundImage: `url(${image})` } : {}}>
                {!isFlipped ? "Matchy Matchy!" : ""}
            </div>
        </div>
    );
}
