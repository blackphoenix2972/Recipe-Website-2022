import '../styles/ContactForm.css';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();
  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_irz6l2m', 'template_8e294iy', form.current, 'K_Cy_te0UU7V_hSHi')
      .then((result) => {
         navigate('/');
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
       <>
       
       <Container>
         <div className="contact-form-container"><form ref={form} onSubmit={sendEmail}>
             <p><b>Name</b> (required)</p>
                <input required className="contact-input-bar" name="name" type="text" placeholder="Enter your name" />
                <br/>
                <p><b>Email</b> (required)</p>
                <input required className="contact-input-bar"  name="email" type="email" placeholder="Enter your email" />
                <br/>
                <p><b>Your Message</b> (required)</p>
                <textArea required className="contact-input-bar" name="message" type="text" placeholder="Type your message" />
                <br/>
                <button className="contact-button">Send</button>
</form>         </div>
<br/>
<br/>
         </Container>
       </>
    );
}

export default ContactForm;