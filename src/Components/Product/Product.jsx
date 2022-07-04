import React from 'react'
import './Product.css'
import { CardGroup,Card } from 'react-bootstrap';

function Product() {
  return (
    <div className='container product'>
      <h1 className='text-center'>Products</h1>
      <CardGroup>
        <Card className='card'>
          <Card.Img variant="top"   className='prodImg' src="http://nayabox.com/api/web/upload/6FM200.jpg" />
          <Card.Body className='cardBody'>
            <Card.Title className='prodTitle'>Card title</Card.Title>
            <Card.Text className='prodPara'>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
      
        </Card>
        <Card className='card'>
          <Card.Img variant="top" className='prodImg' src="http://nayabox.com/api/web/upload/6FM200.jpg" />
          <Card.Body className='cardBody'>
            <Card.Title className='prodTitle'>Card title</Card.Title>
            <Card.Text className='prodPara'>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card className='card'>
          <Card.Img variant="top" className='prodImg' src="http://nayabox.com/api/web/upload/6FM200.jpg" />
          <Card.Body className='cardBody'>
            <Card.Title className='prodTitle'>Card title</Card.Title>
            <Card.Text className='prodPara'>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
         
        </Card>
      </CardGroup>
    </div>
  )
}

export default Product