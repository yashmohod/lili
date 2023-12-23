import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Button.css"
export default function Buttons(props) {
    const navigate = useNavigate();

    return (
        <>
            
            <Container>
                <Row className="justify-content-md-center">
                    <Col xxs={2}>
                        H
                    </Col>
                    <Col xxs={2}>
                        M
                    </Col>
                    <Col xxs={2}>
                        S
                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col xxs={2}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="number" style={{ textAlign: 'center' }} onChange={(e) => props.setTime({ ...props.time, h: parseInt(e.target.value) })} />
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col xxs={2}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="number" style={{ textAlign: 'center' }} onChange={(e) => props.setTime({ ...props.time, m: parseInt(e.target.value) })} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xxs={2}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="number" style={{ textAlign: 'center' }} onChange={(e) => props.setTime({ ...props.time, s: parseInt(e.target.value) })} />
                            </Form.Group>
                        </Form>
                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col xxs={4} >
                        <Button variant="primary" onClick={() => props.start()}>Start</Button>
                    </Col>

                </Row>
            </Container>
        </>
    )

}

