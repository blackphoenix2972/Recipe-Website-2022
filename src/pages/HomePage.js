import "../styles/HomePage.css";
import veggie from "../images/veggie.png";
import Header from "../components/Header.js";
import CustomButton from "../components/CustomButton.js";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SearchIcon from "@mui/icons-material/Search";
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Button from "@mui/material/Button";
import {Link } from "react-router-dom";
import zoom from "../images/zoom.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    AOS.init({once: true});
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <div className="body">
        <div className="grid-container" data-aos="fade-up" data-aos-duration="600">
          <div className="content-box">
            <div id="title">
              Welcome To <br />
              The Food World!
            </div>
            <div id="subtitle">
              Explore many variety of recipes from all around the world!
              Interested? Click below to start your recipe journey!
            </div>
            <div style={{ textAlign: "center", marginTop: 50 }}>
              {/* <CustomButton title="Explore" color='white' backgroundColor="red" width='90%'/> */}
              <Link to="/recipes"><Button
                style={{
                  width: "90%",
                  padding: "15px",
                  fontWeight: "bold",
                  fontSize: "24px",
                  backgroundColor: "red",
                }}
                variant="contained"
                size="large"
                
              >
                Explore
              </Button>
              </Link>
            </div>
          </div>

          <div className="hero-img">
            <img src={veggie} width="50%"></img>
          </div>
        </div>
        <div className="card-grid" data-aos="fade-left" data-aos-duration="600">
          <div className="divider">
            <div>
              <SearchIcon fontSize="large" />
            </div>
            <div>
                <h2>Search Recipe</h2>
            </div>
            <div className="description">
              <h5 id="frr">Search for a Recipe that you wish to cook</h5>
            </div>
            
          </div>
        
         <div className="divider">
             <div>
             <OutdoorGrillIcon fontSize="large" />
             </div>
             <div>
                <h2>Make Recipe</h2>
            </div>
            <div className="description">
              <h5>Follow the steps in order to make the recipe</h5>
            </div>
            
         </div>
         
         <div className="divider">
             <div>
             <EmojiEmotionsIcon fontSize="large" />
             </div>
             <div>
                <h2>Enjoy Recipe</h2>
            </div>
            <div className="description">
              <h5>Enjoy your food!</h5>
            </div>
            
         </div>

         
        </div>
        
      </div>
    </>
  );
};

export default HomePage;
