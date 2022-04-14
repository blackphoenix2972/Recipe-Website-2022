import { useEffect, useState } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DropDownMenu from "../components/DropDownMenu.js";
import Nutrients from "./Nutrients";
import Header from "../components/Header.js";
import "../styles/RecipePage.css";
import TextField from "@mui/material/TextField";
import OutlinedInput from '@mui/material/OutlinedInput';
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '@mui/material/Button';
const RecipePage = () => {
  const [search_text, set_search_text] = useState("");
  const [photos, set_photos] = useState([]);
  const [cuisine, set_cuisine] = useState("");
  const [meal, set_meal] = useState('');
  const [diet, set_diet] = useState('');

  const [show, setShow] = useState(false);
  let cuisine_type = [
    "African",
    "American",
    "Chinese",
    "British",
    "Cajun",
    "Caribbean",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Korean",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Spanish",
    "thai",
    "Vietnamese"
  ];

  let meal_type = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "breakfast"
  ];

  let diet_type = [
    "Gluten Free",
    "Vegetarian",
    "Vegan",
    
  ];
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  let images = [];
  const handleChange = (event) => {
    set_cuisine(event.target.value);
  };
  const handleMeals = (event) => {
    set_meal(event.target.value)
  }
  const handleDiet = (event) => {
    set_diet(event.target.value)
  }
  const textHandle = (event) => {
    set_search_text(event.target.value)
  }
  useEffect(() => {
    AOS.init({once: true});
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <div data-aos="fade-up" data-aos-duration="600">
        <div className="banner-img">
          <img src="http://cdn.shopify.com/s/files/1/0424/4399/7341/files/Website_banner_3_-_holiday_sale_1200x1200.png?v=1642805961" width="50%" />
        </div>
        <div style={{textAlign:'center'}}>
          <h1><b>Explore Recipes</b></h1><br/>
        </div>
        <div style={{margin:'20px'}}>
        <TextField id="outlined-basic" label="Search Recipe" onChange={textHandle} variant="outlined" fullWidth='true'/>
        </div>
        <div className="search-grid">
        
        </div>
        <div style={{backgroundColor:'red', textAlign:'center', margin:20}}>
        <Button variant="contained" fullWidth='true' onClick={onClickHandler} style={{backgroundColor:'red',fontSize:20, padding:10}}>Search Recipe</Button>
        </div>
        <div className="content">
        <div className="food-grid">
          {!photos
            ? "no photos"
            : Object.values(photos).map((post, indx) => {
                let url = "/nutrients/" + post.id;
                return (
                  
                    <div className="food-container" data-aos="fade-up" data-aos-duration="600">
                      <img src={post.image} alt="Alt text" width='300px'></img>
                      <h3>
                        <a href={url}>{post.title}</a>
                      </h3>
                    </div>
                  
                );
              })}
              </div>
        </div>
      </div>
    </>
  );

  function display_images(photos) {

  }
  async function onClickHandler(e) {
    e.preventDefault();
    set_photos([]);
    console.log(cuisine);
    await axios
      .get(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=19876f023c9742af9d6a92a463450d93&query=" + search_text+ "&number=50&cuisine=" +
          cuisine
      )
      .then((res) => {
        res.data.results.forEach((element) => {
          set_photos((oldArray) => [...oldArray, element]);
        });
      });
  }
};

export default RecipePage;
