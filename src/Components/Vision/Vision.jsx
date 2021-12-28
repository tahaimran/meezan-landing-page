import './vision.css'
import Mission from '../Images/mission.png'
function Vision() {
    return(
        
<div className='Vision container-fluid'>
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>

<div className="carousel-inner">
    <div className="carousel-item active d-flex justify-content-center">
      <img className="" width={460} height={345} src={Mission} alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Our Mission</h5>
        <p>...</p>
      </div>
        </div>
     <div className="carousel-item  d-flex justify-content-center">
      <img className="" src='..' alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Our Vision</h5>
        <p>...</p>
      </div>
    </div>
</div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>


    );
}
export default Vision;