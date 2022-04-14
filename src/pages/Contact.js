import Container from 'react-bootstrap/Container';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import contactImg from '../images/contact-icon.png'
const Contact = () => {
    return (

       <>
       <Header/>
       <Container>
           <div style={{textAlign:'center'}}>
           <img src={contactImg} width="100px" height='100px'/>
           </div>
            <div style={{textAlign:'center', marginTop:'30px'}}>
            <h1><b>Contact Us</b></h1>
            </div>
            <ContactForm />

        </Container>
       </>
    );
}

export default Contact;