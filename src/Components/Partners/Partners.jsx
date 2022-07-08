import './Partners.css'
import fju from '../Images/fju.png'
function Partners() {
    return (
        <div className='container-fluid partners text-center mt-5'>
            <div className='row align-items-center'>
                <div className='col-md-3'>
                    <img className='img-fluid' width='160px' src="https://thumbs.dreamstime.com/b/clients-group-icon-special-orange-round-button-isolated-abstract-illustration-105918362.jpg" alt="" />

                </div>
                <div className='col-md-9 row d-flex align-items-center'>
                    <div className='col-md-3'>
                        <h2 className='textCompany'>AWC</h2>

                    </div>
                    <div className='col-md-3'>
                        <img className='img-fluid' src='https://www.netlinepk.com/wp-content/uploads/2017/11/cropped-footer-logo.png' />

                    </div>
                    <div className='col-md-3'>
                        <img className='img-fluid' src='https://www.nadra.gov.pk/wp-content/uploads/2015/12/nadra-logo-r2.png' />

                    </div>
                    <div className='col-md-3'>
                        <img className='img-fluid' src={fju} />

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Partners;