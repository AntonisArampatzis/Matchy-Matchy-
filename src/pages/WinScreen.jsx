import '../styles/WinScreen.css';
import Button from '@mui/material/Button';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function WinScreen() {
    const { width, height } = useWindowSize();
    const navigate = useNavigate();
    const location = useLocation();
    const { score, turns } = location.state || {};

    const handleBackToStart = () => {
        navigate('/');
    }

    const confettiColors = ['#780000', '#8E735B', '#ffe6a7', '#E0C4A1', '#F1E0C6', '#C7A88E', '#B68E59', '#d90429', '#A39781', '#B5A79E'];


    return (
        <Container className='container'>
            <Row>
                <Col md={12}>
                    <div className='WinScreen'>
                        <Confetti colors={confettiColors} width={width} height={height} numberOfPieces={200} gravity={0.1} />
                        <div className='winTitle'>You Won!</div>
                        <div className='textWin'>Congratulations you finished the game in <span>{turns} turns!</span><p>Your final score is <span>{score}!</span></p><p className='thanku'>Thank You For Playing!</p></div>
                        <Button className='bstartBtn' onClick={handleBackToStart}>BACK TO START</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}