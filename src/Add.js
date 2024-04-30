import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormGroup, InputGroup, Row, Stack } from 'react-bootstrap'
import '../src/CSS/Style.css'

export default function Add() {

    return (
        <>
            <div id="adduser">
        
                <Container>
                    <Row className=" d-flex align-items-center vh-100">
                        <Col lg={6} md={7} sm={12} className="mx-auto">
                            <Card className="p-3 bg-info-subtle">
                                <Form className="text-center p-3">
                                    <h3 className="fw-bold text-center pb-2">Student Details</h3>
                                    <Stack gap={3} >
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{ padding: '0px 14px' }}>Student Name</InputGroup.Text>
                                                <Form.Control type="text" placeholder="Enter Your Name" />
                                            </InputGroup>
                                            <p className="text-danger text-center fw-bold pb-0 mb-0"></p>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{ padding: '0px 45px' }}>Email</InputGroup.Text>
                                                <Form.Control type="text" placeholder="Enter Your Email" />
                                            </InputGroup>
                                            <p className="text-danger text-center fw-bold pb-0 mb-0"></p>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{ padding: '0px 28px' }}>Phone No</InputGroup.Text>
                                                <Form.Control type="text" placeholder="Enter Your Number" />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{ padding: '0px 39px' }}>Course</InputGroup.Text>
                                                <Form.Control type="text" placeholder="Enter Your Course" />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{ padding: '0px 30px' }}>Join Date</InputGroup.Text>
                                                <Form.Control type="date" placeholder="Enter Date" />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroup.Text style={{ padding: '0px 34px' }}>Address</InputGroup.Text>
                                                <Form.Control as="textarea" aria-label="With textarea" />
                                            </InputGroup>
                                        </FormGroup>
                                        <Form.Group>
                                            <select class="form-select form-select" aria-label="Small select example">
                                                <option selected>Payment Status</option>
                                                <option value="1">Paid</option>
                                                <option value="2">Unpaid</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Group>
                                            <select class="form-select form-select" aria-label="Small select example">
                                                <option selected>Course Status</option>
                                                <option value="1">Completed</option>
                                                <option value="2">Incomplete</option>
                                                <option value="3">Discontinued</option>
                                            </select>
                                        </Form.Group>
                                        <Container className="d-flex justify-content-center">
                                            <Button className='ps-5 pe-5' variant="primary" type="send" >
                                                submit
                                            </Button>
                                        </Container>
                                    </Stack>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
