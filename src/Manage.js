import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Form, FormGroup, InputGroup, Modal, Row, Stack, Table } from 'react-bootstrap'
import '../src/CSS/Style.css'
import { useNavigate } from 'react-router-dom'

export default function Manage() {
    // const [post, setpost] = useState([])

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res);
    //             setpost(res)
    //         })
    // }, [])


    const Navigate = useNavigate();
    const Nextscreen = () => {
        Navigate('/add')
    }

    return (
        <>
            <div>

                {/* {post.map((iten) => (
                    <ul key={iten.id}>
                        <li>{iten.id}</li>
                        <li>{iten.userId}</li>
                        <li>{iten.title}</li>
                        <li>{iten.body}</li>
                    </ul>
                ))} */}
                <div className="manage vh-100">
                    <Row className="g-0 ">
                        <Col lg={2} md={2}>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <h1 className="text-center text-dark pt-3">Manage Students</h1>
                        </Col>
                        <Col lg={2} md={2} sm={12} className=" text-end pe-4 pt-3">
                            <img src={require('../src/Images/user.png')} width={'50px'} height={'50px'} alt="user icon" />
                            <Modal backdrop="static" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Username:</p>
                                    <p>Password: <input type="password" style={{ border: 'none', outline: 'none' }} disabled /></p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="outline-danger">
                                        Logout
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                    <Container fluid>
                        < > <Row>
                            <Col>
                                <div className="text-end">
                                    <Button variant="success bg-gradient" className="ps-4 pe-4 fs-5 my-3 fw-bold" onClick={Nextscreen} >Add Student</Button>
                                </div>
                            </Col>
                        </Row>
                            <div className="table-container overflow-auto " style={{ height: '450px' }}  >
                                <Table bordereless className="text-center mb-0 "   >
                                    <thead className="table-dark position-sticky top-0">
                                        <tr className="text-nowrap">
                                            <th><i class="fa-solid fa-hashtag text-warning"></i> SI.No</th>
                                            <th><i class="fa-regular fa-address-card text-warning"></i> Reg No</th>
                                            <th><i class="fa-regular fa-address-card text-warning"></i> Status</th>
                                            <th><i class="fa-solid fa-user text-warning"></i> Name</th>
                                            <th><i class="fa-solid fa-calendar-days text-warning"></i> DOB</th>
                                            <th><i class="fa-solid fa-phone text-warning"></i> Phone No</th>
                                            <th><i class="fa-solid fa-user-graduate text-warning"></i> Department</th>
                                            <th><i class="fa-solid fa-coins text-warning"></i> Total Amount</th>
                                            <th><i class="fa-solid fa-credit-card text-warning"></i> Paid</th>
                                            <th><i class="fa-solid fa-scale-balanced text-warning"></i> Balance</th>
                                            <th><i class="fa-solid fa-calendar-days text-warning"></i> Due_Date</th>
                                            <th>View</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>




                                        <Modal className="modal">
                                            <Modal.Header closeButton>
                                                <Modal.Title className=" fw-bold fs-5" >
                                                    <p >Student Details</p>
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="overflow-auto">
                                                <Stack gap={3} >
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> Register No   <span style={{ paddingLeft: '41px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> Name  <span style={{ paddingLeft: '95px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> DOB    <span style={{ paddingLeft: '108px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> Phone No   <span style={{ paddingLeft: '58px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> Department  <span style={{ paddingLeft: '37px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> Total Amount   <span style={{ paddingLeft: '21  px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> Paid <span style={{ paddingLeft: '109px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> Balance <span style={{ paddingLeft: '78px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup as={Row}>
                                                        <Form.Label column lg={5} md={5} sm={5} className="fs-5 fw-bold"> Due_Date <span style={{ paddingLeft: '60px' }}>:</span></Form.Label>
                                                        <Col lg={7} md={7} sm={7}>
                                                            <Form.Control type="text" className="fs-5" plaintext />
                                                        </Col>
                                                    </FormGroup>
                                                    <Button variant="outline-primary" >Payment History</Button>

                                                    <>

                                                        <ul className="list-style">
                                                            <li>
                                                                <span className="fw-bold">Amount Paid :</span> , <span className="fw-bold">Method :</span>  , <span className="fw-bold">Date :</span>
                                                            </li>
                                                        </ul>

                                                    </>



                                                </Stack>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button>Close</Button>
                                            </Modal.Footer>
                                        </Modal>

                                        <Modal centered>

                                            <Container>
                                                <p className="fs-3 text-center pt-4">Are You Sure to Delete ?</p>

                                                <div className="text-end mb-3 fs-5">
                                                    <Button variant="outline-primary" className="" >Close</Button>
                                                    <Button variant="outline-danger" className="mx-2">Delete</Button>
                                                </div>
                                            </Container>
                                        </Modal>





                                    </tbody>
                                </Table>
                            </div>
                        </>




                    </Container>
                </div>
            </div>
        </>
    )
}
