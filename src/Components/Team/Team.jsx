import Teams from '../Images/team.png';
import './Team.css';
import { Google, Facebook, LinkedIn } from '@mui/icons-material';

function Team(){
    return(
        <div className='container-fluid'>
        <div className='team text-center container my-5'>
   <h2>Meezan Team</h2>
   <div className='row'>
      <div className=' person col-md-6   my-5'>
         
         <div className='col-md-12 d-flex align-items-center mx-5 '>
            <div classNam='person-img col-md-6'>
               <img  className='' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div className="social-mentee col-md-6">
                <h3>Asad Hameed</h3>
                <p>General Manager</p>
               <a href="" className=""><Google sx={{ fontSize: 30, color: ' brown' }} /></a>
               <a href="" className=""><Facebook sx={{ fontSize: 30, color: ' #129CF7' }} /></a>
               <a href="" className=""><LinkedIn sx={{ fontSize: 30, color: ' #0A66C2' }} /></a>
            </div>
         </div>
          <div className='col-md-12 d-flex align-items-center mx-5 mt-5'>
            <div classNam='person-img col-md-6' >
               <img  className='' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div className="social-mentee col-md-6">
                <h3>Imran Ali</h3>
                <p>Operations Manager</p>
               <a href="" className=""><Google sx={{ fontSize: 30, color: ' brown' }} /></a>
               <a href="" className=""><Facebook sx={{ fontSize: 30, color: ' #129CF7' }} /></a>
               <a href="" className=""><LinkedIn sx={{ fontSize: 30, color: ' #0A66C2' }} /></a>
            </div>
         </div>
      </div>
      <div className='col-md-6  d-flex align-items-center'>
         <img src={Teams} className='img-fluid' />
      </div>
   </div>
</div>
            </div>
    )
}
export default Team