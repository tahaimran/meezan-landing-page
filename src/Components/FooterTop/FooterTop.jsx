import {LocalPhone, Email, LocationOn} from '@mui/icons-material';
import './FooterTop.css'
function FooterTop() {
    return(
        <div className='footerTop container-fluid py-3 d-flex justify-content-evenly'>
            <div className='row'>
                <div className= 'col-md-6'>
                    <h3>COMPANY INFORMATIONS</h3>
                    <p>About Meezan</p>
                    <p>GM Message</p>
                    <p>Careers</p>
                </div>
              
                 <div className= 'col-md-6'>
                    <h3>GET IN TOUCH</h3>
                    <p><LocalPhone/>+92 51 5961001</p>
                    <p><Email/>info@meezanent.com</p>
                    <p><LocationOn/>Office # 201, Faizan Plaza, 2nd Floor, Committee Chowk Rawalpindi</p>
                </div>
                
            </div>
        </div>
    )
}
export default FooterTop;

