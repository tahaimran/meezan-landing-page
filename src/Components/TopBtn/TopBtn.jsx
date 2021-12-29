import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {animateScroll as Scroll} from 'react-scroll'

import './TopBtn.css'
function TopBtn() {
    return(
        <span onClick={()=> Scroll.scrollToTop()}  className='TopBtn'>
        <ArrowCircleUpIcon className='arrow'  sx={{ fontSize: 60, color : '#F4B41A' }}/>
        </span>
    )
}
export default TopBtn;