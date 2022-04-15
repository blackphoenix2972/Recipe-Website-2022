import Container from "react-bootstrap/esm/Container";
import Header from "../components/Header";
import '../styles/About.css';
import AOS from "aos";

import { useEffect } from "react";
const About = () => {
    useEffect(() => {
        AOS.init({once: true});
        AOS.refresh();
      }, []);
    return (
        <div>
        <Header/>
<Container>
        <div data-aos="fade-right" data-aos-duration="600" className="banner-img">
          <img src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=" width="50%" />
        </div>

        <div className="content-grid" data-aos="fade-up" data-aos-duration="600">
            
            <div >
                <b style={{fontSize:'40px'}}>Our Mission: </b>
               

            </div>
            <div>
                <p style={{textAlign:'center'}}>
                    In order to provide the best food recipes to our customers, we have created this website.
                    We hope that you will enjoy our website and find the best recipes for your food.

                </p>
            </div>

           
     </div>

        </Container>

        </div>
     
    );
}

export default About;