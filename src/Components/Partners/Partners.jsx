import './Partners.css'
import fju from '../Images/fju.png'
function Partners() {
    return (
        <div className='container-fluid partners text-center mt-5'>
            <div className='text-center'>
                {/* <img className='img-fluid' width='160px' src="https://thumbs.dreamstime.com/b/clients-group-icon-special-orange-round-button-isolated-abstract-illustration-105918362.jpg" alt="" /> */}
                <h1>Our Clients</h1>
            </div>
            <div className=' row d-flex align-items-center'>
                {/* <div className='col-md-2'>
                    <img className='img-fluid' src='https://www.e360.pk/images/CompnayLogos/153655883620180910.PNG' />
                </div> */}
                <div className='col-md-2'>
                    <h2 className='textCompany '>AWC</h2>
                </div>
                <div className='col-md-2'>
                    <img className='img-fluid' src='https://www.netlinepk.com/wp-content/uploads/2017/11/cropped-footer-logo.png' />
                </div>
                <div className='col-md-2'>
                    <img className='img-fluid' src='https://cdn.enfsolar.com/ID/logo/5a3b177d78233.jpg?v=1' />
                </div>
                <div className='col-md-2'>
                    <img className='img-fluid' src={fju} />
                </div>
                <div className='col-md-2'>
                    <img className='img-fluid' src='https://silicon.net.pk/wp-content/uploads/2019/07/new-logo.png' />
                </div>
                <div className='col-md-2'>
                    <img className='img-fluid' src='https://hivetechglobal.com/wp-content/uploads/2021/03/logo.png' />
                </div>
            </div>
        </div>
    )
}
export default Partners;