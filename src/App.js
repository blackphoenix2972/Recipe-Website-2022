
import './App.css';

import HomePage from './pages/HomePage.js';
import RecipePage from './pages/RecipePage.js';
import Nutrients from './pages/Nutrients.js';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/recipes" element={<RecipePage/>}></Route>
        <Route exact path="/nutrients/:id" element={<Nutrients/>}></Route>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
