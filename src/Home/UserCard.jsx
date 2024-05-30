import {React, useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import DetailedCard from './DetailedCard';
import Modal from 'react-bootstrap/Modal';


function UserCard(user) {
  const [modalShow, setModalShow] = useState(false); 
  return (
   <div className='grid-style'>
     <Card style={{ width: '18rem' }} className='card btn btn-light' onClick={() => setModalShow(true)}>
    <Card.Img variant="top" src={user.img} />
    <Card.Body>
      <Card.Title>Name: {user.name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Age: {user.age}</ListGroup.Item>
      <ListGroup.Item>City: {user.city}</ListGroup.Item>
      <ListGroup.Item>Country: {user.country}</ListGroup.Item>
    </ListGroup>
    
  </Card>
 <DetailedCard 
   show={modalShow}
   onHide={() => setModalShow(false)}
   fullname={user.fullname}
   email= {user.email}
  phone={user.phone}
  age={user.age}
  city={user.city}
  country={user.country}
  img={user.img}
  lat={user.lat}
  lng={user.lng}
  />
   </div>


  )
}

export default UserCard