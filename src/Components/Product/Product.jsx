import React from 'react'
import './Product.css'
import { CardGroup, Card } from 'react-bootstrap';
import ProductO from '../Images/Products/6FM65E-X.jpeg'
import ProductTH from '../Images/Products/6FM100E-X.jpeg'
import ProductFO from '../Images/Products/CP12400F-X.jpeg'
import ProductFI from '../Images/Products/CP1250.jpeg'
import ProductS from '../Images/Products/CP1270Y.jpeg'

import DocumentO from '../Documents/6FM65E-X.pdf'
import DocumentTW from '../Documents/6FM100E-X.pdf'
import DocumentTH from '../Documents/CP12400F-X.pdf'
import DocumentFO from '../Documents/CP1250.pdf'
import DocumentFI from '../Documents/CP1270.pdf'

function Product() {
  return (
    <div className=' product '>
      <h1 className='text-center'>Products</h1>
      <div className='prodGrp'>
        <div className='cardGroup '>
          <Card className='card '>
            <Card.Img variant="top" className='prodImg' src={ProductO} />
            <Card.Body className='cardBody'>
              <Card.Title className='prodTitle'>6FM100E-X</Card.Title>
              <Card.Text className='prodPara'>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardFooter  text-center'>
              <button type="button" className='btn btn-warning'>Ask Price</button>
              <a href={DocumentTW} download><button type="button" className='btn btn-outline-warning'>Download</button></a> 

            </Card.Footer>
          </Card>
        
          <Card className='card'>
            <Card.Img variant="top" className='prodImg' src={ProductTH} />
            <Card.Body className='cardBody'>
              <Card.Title className='prodTitle'>6FM65E-X</Card.Title>
              <Card.Text className='prodPara'>
              This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardFooter  text-center'>
              <button type="button" className='btn btn-warning'>Ask Price</button>
              <a href={DocumentO} download><button type="button" className='btn btn-outline-warning'>Download</button></a> 

            </Card.Footer>
          </Card>
          <Card className='card'>
            <Card.Img variant="top" className='prodImg' src={ProductFO} />
            <Card.Body className='cardBody'>
              <Card.Title className='prodTitle'>CP12400F-X</Card.Title>
              <Card.Text className='prodPara'>
              This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardFooter  text-center'>
              <button type="button" className='btn btn-warning'>Ask Price</button>
              <a href={DocumentTH} download><button type="button" className='btn btn-outline-warning'>Download</button></a> 

            </Card.Footer>
          </Card>
          <Card className='card'>
            <Card.Img variant="top" className='prodImg' src={ProductFI} />
            <Card.Body className='cardBody'>
              <Card.Title className='prodTitle'>CP1250</Card.Title>
              <Card.Text className='prodPara'>
              This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardFooter  text-center'>
              <button type="button" className='btn btn-warning'>Ask Price</button>
              <a href={DocumentFO} download><button type="button" className='btn btn-outline-warning'>Download</button></a> 

            </Card.Footer>
          </Card>
          <Card className='card'>
            <Card.Img variant="top" className='prodImg' src={ProductS} />
            <Card.Body className='cardBody'>
              <Card.Title className='prodTitle'>CP1270Y</Card.Title>
              <Card.Text className='prodPara'>
              This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className='cardFooter  text-center'>
              <button type="button" className='btn  btn-warning'>Ask Price</button>
             <a href={DocumentFI} download><button type="button" className='btn btn-outline-warning'>Download</button></a> 

            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Product