import AboutUs from '../Images/about.png'
import './About.css'
function About() {
    return(
    <div id='About' className='container about'>
            <div className='row  d-flex align-items-center'>
                <div className='col-md-6'>
                <img className='img-fluid' src={AboutUs}/>
                </div>
            <div className='col-md-6'>
                <h2 className='text-center text-title'><span className='headingabout'>About </span><span>Meezan Enterprise</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                </div>
            </div>
        </div>
    )
}
export default About