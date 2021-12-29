import Logistics from '../Images/logistics.png'
import './Main.css'
function Main() {
    return (
        <div className='container main  d-flex justify-content-center'>
            <div className='row mt-5 flex-wrap-reverse '>
                <div className='col-md-6 mt-5'>
                    <h1>Meezan Enterprise</h1>
                    <p className='mt-5 w-75'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
                <div className='col-md-6'>
                    <img src={Logistics} className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}
export default Main