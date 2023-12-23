import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Display(props) {
    const h = () => {
        if (props.time.h === 0) {
            return '';
        } else {
            return <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>;
        }
    }
    return (
        <>
            <div>
                <span style={{ fontSize: "40px" }}>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}:</span>&nbsp;&nbsp;
                <span style={{ fontSize: "40px" }}>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}:</span>&nbsp;&nbsp;
                <span style={{ fontSize: "40px" }}>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;&nbsp;
                <span style={{ fontSize: "20px" }}>:{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>
            </div>
            <Row className="justify-content-md-center">
                <Col xxs={4} >
                    <Button variant="danger" onClick={() => props.stop()}>Stop</Button>
                </Col>
                <Col xxs={4} >
                    {props.status == 3 ?
                        <Button variant="primary" onClick={() => props.start()}>Resume</Button>
                        :
                        <Button variant="primary" onClick={() => props.pause()}>Pause</Button>
                    }

                </Col>
            </Row>
        </>
    );
}

export default Display;