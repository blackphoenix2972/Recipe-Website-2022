
import './App.css';

import HomePage from './pages/HomePage.js';
import RecipePage from './pages/RecipePage.js';
import Nutrients from './pages/Nutrients.js';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/recipes" element={<RecipePage/>}></Route>
        <Route exact path="/nutrients/:id" element={<Nutrients/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
