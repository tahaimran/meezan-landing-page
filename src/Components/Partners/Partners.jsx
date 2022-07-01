import './Partners.css'
import fju from '../Images/fju.png'
function Partners() {
    return (
        <div className='container-fluid partners text-center mt-5'>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <h1>OUR Clients</h1>

                </div>
                <div className='col-md-8 row d-flex align-items-center'>
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