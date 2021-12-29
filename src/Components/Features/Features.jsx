import {LocalShipping, AccessTime,AssuredWorkload} from '@mui/icons-material';
import './Features.css';
import TopBtn from '../TopBtn/TopBtn'
function Features() {
    return(
    <div id='Features' className="features container-fluid text-center">
           <h1>Our Features</h1>
        <div className="row ">
            <div className="col-md-4">
             <LocalShipping className='icon'  sx={{fontSize: 50 }}/>
                <h3>Fast <span>Service</span></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            </div>
                <div className="col-md-4">
             <AccessTime className='icon' sx={{fontSize: 50 }}/>
                <h3>Available<span> 24/7</span> </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            </div>
                <div className="col-md-4">
               <AssuredWorkload className='icon' sx={{ fontSize: 50 }}/>    
                <h3>Quality <span>Assuarance</span></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            </div>
            </div>
        </div>
    )
}
export default Features;