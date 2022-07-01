import Logistics from '../Images/logistics.png'
import './Main.css'
function Main() {
    return (
        <div className='container main  d-flex justify-content-center'>
            <div className='row mt-5 flex-wrap-reverse '>
                <div className='col-md-6 mt-5'>
                    <h1>Meezan Enterprise</h1>
                    <p className='mt-5 '>
                    Meezan Enterprise makes business stream. As one of the world's driving general request supply organizations, we plan and execute industry-driving arrangements. Working constantly to, convey functional greatness — to give feasible responses to the most difficult store network questions.                    </p>
                </div>
                <div className='col-md-6'>
                    <img src={Logistics} className='img-fluid'/>
                </div>
            </div>
        </div>
    )
}
export default Main