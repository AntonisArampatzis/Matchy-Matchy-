import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

import "../styles/StartScreen.css";



export default function StartScreen() {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/game');
    };

    return (
        <div className="StartScreen">
            <Container fluid className="h-100 d-flex align-items-center justify-content-center">
                <Row className="text-center">
                    <Col xs={12}>
                        <div className="title">Matchy-Matchy!</div>
                    </Col>
                    <Col xs={12}>
                        <div className="desc">Welcome to my memory game!</div>
                    </Col>
                    <Col xs={12}>
                        <Button className="startBtn" id="strBtn" variant="contained" size="large" onClick={handleStartClick}>
                            START GAME
                        </Button>
                    </Col>
                    <Col xs={12} className="mt-3">
                        <div className="developer">© 2024 Antonis Arampatzis</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
