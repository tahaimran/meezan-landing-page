import './ContactForm.css'
import Message from '../Images/message.jpg'
 function ContactForm() {
    return(
   <div className='container contact '>
	<div className='row mt-5'>
		<div className='col-md-6'>
            <h3>We Will Be Right Back As Recieve Your Response</h3>
			<form>
				<div className='inputBox'>
					<input type='text' placeholder="Enter Your Name" /> </div>
				<div className='inputBox'>
					<input type='email' placeholder="Enter Your Email" /> </div>
				<div className='message'> 
					<textarea placeholder="Enter Your message" rows="5" cols="40">
                    </textarea>
                </div>
                <button className='submit'>Send Message</button>
			</form>
		</div>
        <div className='col-md-6'>
        <img className='img-fluid' src={Message}/>
        </div>
	</div>
</div>
    )
}
export default ContactForm;