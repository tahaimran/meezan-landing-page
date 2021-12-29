import './vision.css'
import Mission from '../Images/mission.png'
import { Carousel } from 'react-bootstrap'
function Vision() {
  return (

    <div id='Mission' className='Vision container'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block "
            src="https://www.kinesisinc.com/wp-content/uploads/2020/04/company-mission-statement-hero-@2x.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Our Mission</h1>
            <h5>Become essential to our customers by providing differentiated products and services to help them achieve their aspirations.

            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block "
            src="https://cdn-images-1.medium.com/max/1024/1*pL-rEQNWsdhPZ527yUQVgQ.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>Our Vision</h1>
            <h5>Provide maximum value for our shareholders whilst helping our customers to fulfil their dreams.

            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>


  );
}
export default Vision;