import AboutUs from '../Images/about.png'
import './About.css'
function About() {
    return (
        <div id='About' className='container about'>
            <div className='row  d-flex align-items-center'>
                <div className='col-md-6'>
                    <img className='img-fluid' src={AboutUs} />
                </div>
                <div className='col-md-6'>
                    <h2 className='text-center text-title'><span className='headingabout'>About </span><span>Meezan Enterprise</span></h2>
                    <p>Strategies Ground's adaptable model, utilizing just quality transporters, implies you benefit from further developed assistance levels, more noteworthy adaptability, and time-distinct conveyances. Our aptitude in transporting the executives and arranging permit us to plan an answer that addresses your issues and furthermore rapidly reacts to any occasion disturbances, like climate .
                    </p>
                    <p>
                        Incorporated Street organizations, covering the world. Through our worldwide organization of control pinnacles and cutting-edge innovation, we can screen and progressively respond to circumstances, for example, antagonistic climate, extra pick-ups or drop-offs, or weighty traffic, implying that your products are continually venturing to every part of the most proficient course.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About