import Logistics from '../Images/logistics.png'
import './Main.css'
function Main() {
    return (
        <div className='container main  d-flex justify-content-center'>
            <div className='row mt-5 flex-wrap-reverse '>
                <div className='col-md-6 mt-5'>
                    <h1>Meezan Enterprise</h1>
                    <p className='mt-5 '>
                    Meezan Enterprise is a leading distributor of power solutions and trusted partner of Vision Hong Kong, who understands the value of our customer </p>
                </div>
                <div className='col-md-6'>
                    <img src={Logistics} className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}
export default Main