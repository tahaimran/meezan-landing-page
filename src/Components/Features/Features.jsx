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
                <p>You benefit from each advancement, regardless of whether it includes a basic augmentation to our Air and Sea Cargo items, whether it implies an improvement in warehousing.</p>
            </div>
                <div className="col-md-4">
             <AccessTime className='icon' sx={{fontSize: 50 }}/>
                <h3>Available<span> 24/7</span> </h3>
                <p>All of which clarifies for what reason you'll observe the group of exceptional help at TransCargo prepared to apply their energy for arrangements on the side of your business.</p>
            </div>
                <div className="col-md-4">
               <AssuredWorkload className='icon' sx={{ fontSize: 50 }}/>    
                <h3>Quality <span>Assuarance</span></h3>
                <p>You benefits from our involvement with conveying successful answers for the complex worldwide stockpile chains of a portion of the world's greatest partnerships.</p>
            </div>
            </div>
        </div>
    )
}
export default Features;