import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/Nutrients.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import Header from "../components/Header";


const Nutrients = (props) => {
  const title = props.title;
  const url = window.location.href;
  const [text, setText] = useState([]);
  const strs = url.split("/");

  const id = strs.at(-1);

  let number_id = Number(id);
  const API_KEY = "19876f023c9742af9d6a92a463450d93";
  const URL =
    "https://api.spoonacular.com/recipes/" +
    String(number_id) +
    "/information?apiKey=" +
    API_KEY;
  const URL_ANALYZED_INSTRUCTIONS =
    "https://api.spoonacular.com/recipes/" +
    String(number_id) +
    "/analyzedInstructions?apiKey=" +
    API_KEY;

const URL_INGREDIENTS = "https://api.spoonacular.com/recipes/" + String(number_id) + "/ingredientWidget.json?apiKey=" + API_KEY;

  const [image, setImage] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientImage, setIngredientimage] = useState([]);
const SIZE = '100x100'
let x = `https://spoonacular.com/cdn/ingredients_${SIZE}/`;

  useEffect(() => {
    get_image(URL);
    get_analyzed_instructions(URL_ANALYZED_INSTRUCTIONS);
    get_ingredients(URL_INGREDIENTS)
  }, []);

  return (
    <>
    <Header/>
    <Container>
      <div className="image-container">
      <img src={image} width='500px' />
      </div>
     </Container>
     
      <p>
        <Container>
        <h3><b>Instructions:</b></h3>
        {instructions.map((instruction,index) => {
          return (
            <div>
              {console.log('Hello  ' +ingredientImage)}
              
              <p>{index+1} - {instruction}</p>
              
              </div>
          );
        })}
        </Container>
      </p>
      <Container>
        <h3><b>Ingredients:</b></h3><br/>
      <p><div className="ingredients-grid-container">
      
       {ingredients.map((value, index)=>{
         return (
           <>
           
     <div>
               <img src={x + ingredientImage[index]} width='100px' />
                <div style={{paddingTop:20}}>
                <p>{value}</p>
                </div>
                <br/>
          </div>    
          
        

          
   
           </>
         );
       })}
       </div>
      </p>
      </Container>
    </>
  );

  async function get_image(URL) {
    await axios.get(URL).then((res) => {
      setImage(res.data.image);
    });
  }

  async function get_analyzed_instructions(URL) {
    await axios.get(URL).then((res) => {
      for (const key in res.data) {
        for (const index in res.data[key].steps) {
          setInstructions(prev => [...prev, res.data[key].steps[index].step])
        }
      }
    });
  }

  async function get_ingredients(URL) {
    await axios.get(URL).then((res) => {
    //  console.log(res.data.ingredients)
      let ingredients = res.data.ingredients;
      ingredients.forEach(element => {
        // console.log(element.name)
        let ingredientName = element.name;
        let ingredientImage = element.image;
        setIngredients(prev => [...prev, ingredientName]);
        setIngredientimage(prev => [...prev, ingredientImage])
      });
      // set_analyzed_instructions(res.data)
    });
  }
};

export default Nutrients;
