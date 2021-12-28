import {LocalShipping, AccessTime,AssuredWorkload} from '@mui/icons-material';
import './Features.css';
function Features() {
    return(
    <div className="features container-fluid text-center">
           <h2>Our Features</h2>
        <div className="row ">
            <div className="col-md-4">
              <span className='icon'><LocalShipping sx={{fontSize: 40 }}/></span>  
                <h3>Fast <span>Service</span></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            </div>
                <div className="col-md-4">
              <span className='icon'><AccessTime sx={{fontSize: 40 }}/></span>  
                <h3>Available<span> 24/7</span> </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            </div>
                <div className="col-md-4">
                <span className='icon'><AssuredWorkload sx={{ fontSize: 40 }}/></span>    
                <h3>Quality <span>Assuarance</span></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            </div>
            </div>
        </div>
    )
}
export default Features;