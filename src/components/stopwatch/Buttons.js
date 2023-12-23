import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Button.css"
import Button from 'react-bootstrap/Button';
function Buttons(props) {
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate("/")} className='backButton'>Back</Button>
            {(props.status === 0) ?
                <Button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={props.start}>Start</Button> : ""
            }

            {(props.status === 1) ?
                <div>
                    <Button className="stopwatch-btn stopwatch-btn-red"
                        variant="danger" onClick={props.stop}>Stop</Button>
                    <Button className="stopwatch-btn stopwatch-btn-yel"
                        onClick={props.reset}>Reset</Button>
                </div> : ""
            }

            {(props.status === 2) ?
                <div>
                    <Button className="stopwatch-btn stopwatch-btn-gre"
                        onClick={props.resume}>Resume</Button>
                    <Button className="stopwatch-btn stopwatch-btn-yel"
                        onClick={props.reset}>Reset</Button>
                </div> : ""
            }

        </div>
    );
}

export default Buttons;