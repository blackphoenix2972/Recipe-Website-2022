import axios from "axios";
import { useEffect, useState } from "react";

const Nutrients = (props) => {
  const title = props.title;
  const url = window.location.href;
  const [text, setText] = useState([]);
  const strs = url.split("/");

  const id = strs.at(-1);

  let number_id = Number(id);
  const API_KEY = "491d569998e647a2b00ee7791bd9d5a6";
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
      
      <img src={image} />
      <p>
        {instructions}
      </p>
      <p>
       {ingredients.map((value)=>{
         return (
           <>
           
              {value}
           </>
         );
       })}
       {
         ingredientImage.map((p) => {
           console.log(p);
           let u = x + p
           return(<>
         <img src={u} alt={p}/>
         </>)})
       }
        
       
        {/* // Object.keys(ingredients).map((d)=>{console.log('logging : ' + ingredients[d].ingredientName)})} */}

      </p>
    </>
  );

  async function get_image(URL) {
    await axios.get(URL).then((res) => {
      setImage(res.data.image);
    });
  }

  async function get_analyzed_instructions(URL) {
    await axios.get(URL).then((res) => {
      // console.log(res.data);

      for (const key in res.data) {
        for (const index in res.data[key].steps) {
          // console.log(res.data[key].steps[index].step);     
          setInstructions(prev => [...prev, res.data[key].steps[index].step])
        }
      }
      // set_analyzed_instructions(res.data)
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
