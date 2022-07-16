import {LocalShipping, AccessTime, BeachAccess  , ThumbUp} from '@mui/icons-material';
import './Features.css';
import TopBtn from '../TopBtn/TopBtn'
function Features() {
    return(
    <div id='Features' className="features container-fluid text-center">
           <h1>Features</h1>
        <div className="row ">
            <div className="col-md-4">
            <AccessTime className='icon' sx={{fontSize: 50 }}/>

                <h3>Long<span>Life</span></h3>
                <p>Hours of Power</p>
            </div>
                <div className="col-md-4">
                <ThumbUp className='icon'  sx={{fontSize: 50 }}/>

                <h3>Reliable</h3>
                <p>The Dependability You Need.</p>
            </div>
                <div className="col-md-4">
               <BeachAccess className='icon' sx={{ fontSize: 50 }}/>    
                <h3>Less <span>Hassle</span></h3>
                <p>100% Maintenance Free</p>
            </div>
            </div>
        </div>
    )
}
export default Features;