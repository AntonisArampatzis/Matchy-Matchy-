import Card from "./Card";
import "../styles/Cards.css";
import { useState, useEffect } from "react";
import SidePanel from "./SidePanel";
//to use react-bootstrap needed
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Scoring from '../components/Scoring'

export default function Cards({ images }) {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [turns, setTurns] = useState(0);
  const [pairCount, setPairCount] = useState(0);
  const navigate = useNavigate();


  const pairCountHandler = () => {
    setPairCount((prevPairCount) => {
      const updatedPairCount = prevPairCount + 1;
      console.log('pair count:', updatedPairCount)
      return updatedPairCount;
    });
  }


  const handleCardClick = (uId) => {
    if (matchedCards.includes(uId) || uId === firstCard?.uId || uId === secondCard?.uId) {
      //blocks me from clicking twice the same card,meaning if this card is already clicked i cant click again untill i click another,so firstcard is stored and i cant click again the same,ill click another and store to secorndcard,cards will not be clickable or flipped again
      //keep the cards flipped (shown), but only for matched cards or the currently flipped cards until comparison
      return;
    }

    if (!firstCard) {
      setFirstCard({ uId, imageId: images[uId].id });  //imageid becomes the the image that this uid has,it searches the images array to find which id has that corresponding uid,if uid=5 it searches array as images[5].id and takes that id(that id is urlIdx used in image url)
    } else if (!secondCard) {
      setSecondCard({ uId, imageId: images[uId].id });

      //update turn counter after the second card flip
      setTurns((prevTurns) => {
        const updatedTurns = prevTurns + 1;
        console.log('Turns:', updatedTurns);
        return updatedTurns;
      })
    }
  };




  useEffect(() => {
    if (firstCard && secondCard) { //check if both are populated then acts

      if (firstCard.imageId === secondCard.imageId) {//if both are the same pokemon image
        setMatchedCards((prev) => [...prev, firstCard.uId, secondCard.uId]); //storing matched cards by using spread to make a copy of existing matchedcards array and addin to it the uid of first and second card,meaning when i find a pair they are going to be inside matchedcards array and here comes -> matchedCards.includes(uId) || uId === firstCard?.uId || uId === secondCard?.uId from handlecardclick
        pairCountHandler();//calling pairCountHandler that adds 1 on paircount when  a pair is found
        setScore((prevScore) => {
          const updatedScore = prevScore + 200;
          console.log('Score:', updatedScore);  //updated score after successfull match
          return updatedScore;
        })
      }
      if (score > 0) {
        setScore((prevScore) => {
          const updatedScore = prevScore - 20;
          console.log('Score:', updatedScore);
          return updatedScore;
        })
      }


      setTimeout(() => { // Reset flipped state after a short delay for visual effect
        setFirstCard(null);
        setSecondCard(null);
      }, 1000);
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (pairCount === 14) {
      // Adding delay before navigating to WinScreen
      setTimeout(() => {
        navigate('/win', { state: { score, turns } }); // Navigate after a 1-second delay
      }, 1000); // 
    }
  }, [pairCount, navigate, score, turns]);


  const cardsGrid = images.map((image, index) => (
    <Card
      key={index}//for react must have a key to help rerenders
      imageId={image.id}//imageid used to debug easier instead usign the url from image down below
      image={image.image}//display the card image
      uId={index} //unique id for each card 
      handleClick={() => handleCardClick(index)} //when the card is clicked, the handleCardClick function is invoked with the uId (which is the card's index in the images array)
      isFlipped={matchedCards.includes(index) || index === firstCard?.uId || index === secondCard?.uId}//checks if the card should be flipped,If the card has been matched (its uId is in matchedCards), it will be considered flipped,If the card is the firstCard or secondCard, it will be flipped as well
    />
  ));

  return (
    <Container className="Cards" fluid style={{ paddingLeft: '0px', paddingRight: '20px' }}>
      <Row className="row">
        <Col xs={12} md={6} style={{ padding: '0' }}>
          <Scoring score={score} turns={turns} />
        </Col>
        <Col xs={12} md={6} className="cardsGrid" style={{ padding: '0' }}>
          {cardsGrid}
        </Col>
      </Row>
    </Container>);


}

//When a card is clicked, the handleCardClick function is called with the unique uId of the clicked card.
//The component tracks the state of the two flipped cards (firstCard and secondCard).
//If the two flipped cards match (based on their imageId), they are added to the matchedCards state.
//The cards are rendered in a grid, with the isFlipped prop determining whether each card is showing its image or not.