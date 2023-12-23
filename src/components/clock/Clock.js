import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const Clock = () => {
    const navigate = useNavigate();
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <>
            <div>
                <h1>{currentTime}</h1>
                <Row>
                    <Col>
                        <Button onClick={() => navigate("/stopwatch")}> Stopwatch </Button>
                    </Col>
                    <Col>
                        <Button onClick={() => navigate("/timer")}> Timer </Button>
                    </Col>
                </Row>
            </div>
        </>
    )

}

export default Clock;