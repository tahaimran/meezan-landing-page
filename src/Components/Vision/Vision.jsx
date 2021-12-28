import './vision.css'
import Mission from '../Images/mission.png'
import { Carousel } from 'react-bootstrap'
function Vision() {
  return (

    <div className='Vision container'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block "
            src="https://www.kinesisinc.com/wp-content/uploads/2020/04/company-mission-statement-hero-@2x.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Our Mission</h1>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard

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
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard

            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>


  );
}
export default Vision;