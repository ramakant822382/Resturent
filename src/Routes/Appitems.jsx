import React from 'react'
import{Card,Button} from 'react-bootstrap'
import Header from './Header';
import {Link} from 'react-router-dom'

function Main() {
  return (
    <div>
        <Header/>
        <div className='container  om'>
  <div className='row'>
    <div className="col-3">
    <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="/img/burger.png" />
  <Card.Body className='cbody'>
    <Card.Title>Humburger</Card.Title>
    <p>Prise:200</p>
    
    <Button variant="primary">+</Button> <Button variant="primary">-</Button>
  </Card.Body>
</Card>
    </div>
    <div className="col-3">
    <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="/img/fr.png" />
  <Card.Body>
    <Card.Title>Fries</Card.Title>
    <p>Prise:100</p>
    
    <Button variant="primary">+</Button> <Button variant="primary">-</Button>
  </Card.Body>
</Card>
    </div>
    <div className="col-3">
    <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="/img/coke.png" />
  <Card.Body>
    <Card.Title>Coke</Card.Title>
    <p>Prise:50</p>
  
    <Button variant="primary">+</Button> <Button variant="primary">-</Button>
  </Card.Body>
</Card>
    </div>
   
    <div className="col-3">
    <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="/img/pepsi.jpeg" />
  <Card.Body>
    <Card.Title>Pepsi</Card.Title>
    <p>Prise:50</p>
  
    <Button variant="primary">+</Button>  <Button variant="primary" color='red'>-</Button>
  </Card.Body>
</Card>


<br></br>
<br></br>
<br></br>


<div>
<button  className='button1'><Link to={'/sumbit'}> Add to Cart</Link>   </button></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Main;