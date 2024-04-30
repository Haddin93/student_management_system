import React from 'react'
import './Admin.css'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate();

  const Nextscreen = () =>
  {
    navigate('/manage')
  }
  return (
    <>
    <div className='bg-image'>
    <Container>
     <Row className="vh-100 d-flex justify-content-center align-items-center">
       <Col lg={5} >
         <Container className="bg-transparent"></Container>
         <Card className="bg-dark-subtle">
           <Card.Body>
             <Container className="mb-3 mt-4">
               <h2 className="fw-bold mb-2 text-uppercase text-center text-secondary">Student Login</h2>
               <p className="mb-5 text-center">Enter your details to sign-in to your account</p>
               <Form className="mb-3">
                 <Form.Group className="mb-3" controlId="formBasicUsername">
                   <Form.Label className="text-center">
                     Username
                   </Form.Label>
                   <Form.Control type="email" placeholder="Enter username" />
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" placeholder="Password" />
                 </Form.Group>
                 <Container className="mb-3">
                   <p className="small">
                     <a className="text-secondary" href="#!">
                       Forgot password?
                     </a>
                   </p>
                 </Container>
                 <Container className="d-grid">
                   <Button variant="secondary" type="submit" className='login' onClick={Nextscreen}>
                     Login
                   </Button>
                 </Container>
               </Form>

             </Container>
           </Card.Body>
         </Card>
       </Col>
     </Row>
   </Container>
   </div>
   </>
  )
}
