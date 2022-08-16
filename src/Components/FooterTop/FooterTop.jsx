import { LocalPhone, Email, LocationOn } from '@mui/icons-material';
import './FooterTop.css'
function FooterTop() {
    const inframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.5075675740941!2d73.06518032923714!3d33.61314021565992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94bfb215715d%3A0xf2109d3d622c8823!2sKarwan%20Al%20Siddiqui%20Hajj%20%26%20Umrah!5e1!3m2!1sen!2s!4v1656580039929!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    return (
        <div className='footerTop container-fluid py-3 d-flex justify-content-evenly'>
            <div className='row'>
                <div className='col-sm-12 col-md-3'>
                    <h3>COMPANY INFORMATIONS</h3>
                    <p>About Meezan</p>
                    <p>GM Message</p>
                    <p>Careers</p>
                </div>

                <div className='col-sm-12 col-md-4'>
                    <h3>GET IN TOUCH</h3>
                    <p><LocalPhone />+92 51 5961001</p>
                    <p><Email />info@meezanent.com</p>
                    <p><LocationOn />Office # 201, Faizan Plaza, 2nd Floor, Committee Chowk Rawalpindi</p>
                </div>

                <div className='col-sm-10 col-md-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.3318969224476!2d73.06429191881642!3d33.614026797576614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df959370f2e2cf%3A0x2004fdb50dd493c3!2sMeezan%20Enterprises!5e0!3m2!1sen!2s!4v1660644680620!5m2!1sen!2s" width="500" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>
            </div>
        </div>
    )
}
export default FooterTop;

