import React, {useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import MapComponent from './MapComponent';

import {Row, Col} from 'react-bootstrap'

function DetailedModal(user) {
  const maxLength = 100; // Maximum number of characters allowed
  const [remainingChars, setRemainingChars] = useState(maxLength);
  const textareaRef = useRef(null);

  const handleInputChange = () => {
    const currentLength = textareaRef.current.value.length;
    setRemainingChars(maxLength - currentLength);
  };
  const handleSubmit=()=>{
    console.log("submitted");
  }
  return (
    <Modal
    {...user}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    scrollable
    >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {user.fullname}
      </Modal.Title>

    </Modal.Header>
    <Modal.Body>
    <ListGroup className="list-group-flush">
    <Stack>
    <Row>
      <Col>    
      <div className="card img"><Image variant="top" src={user.img}/></div>
      </Col>
      <Col>
      <div>Age: {user.age}</div>
      <div>City: {user.city}</div>
      <div>Country: {user.country}</div>
      <div >Phone: {user.phone}</div>
      <div>Email: {user.email}</div>
 
          <MapComponent lat={user.lat} lng={user.lng} country={user.country} />
            <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
            <Form.Label>Message that you want to send:</Form.Label>

              <Form.Control as="textarea" rows={2}  placeholder={`Hello ${user.fullname}...`}  ref={textareaRef}
        maxLength={maxLength}
        onChange={handleInputChange} />
         <p>{remainingChars} characters remaining</p>
            </Form.Group>
            <Button onClick={()=>{console.log("Message sent.");}}>Send</Button>

          </Form>
      </Col>
    </Row>
    </Stack>
    </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={user.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DetailedModal