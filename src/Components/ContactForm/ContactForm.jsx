import './ContactForm.css'
import Message from '../Images/message.jpg';
import emailjs from 'emailjs-com';

function ContactForm() {
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.current, 'YOUR_USER_ID')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	  };
	return (
		<div id='Contact' className='container contact '>
			<div className='row mt-5 d-flex justify-content-center'>
				<div className='col-md-6'>
					<h3>We Will Be Right Back As Recieve Your Response</h3>
					<form onSubmit={sendEmail}>
						<div className='inputBox'>
							<input type='text' placeholder="Enter Your Name" name='name' /> </div>
						<div className='inputBox'>
							<input type='email' placeholder="Enter Your Email" name='email'  /> </div>
							<div className='inputBox'>
							<input type='text' placeholder="Enter Your Subject" name='subject'  /> </div>
						<textarea className='message' name='message'  placeholder="Enter Your message" rows="5" cols="40">
						</textarea>
						<input value='Send Message'  type="submit" className='submit '/>
					</form>
				</div>
				<div className='col-md-6'>
					<img className='img-fluid' src={Message} />
				</div>
			</div>
		</div>
	)
}
export default ContactForm;