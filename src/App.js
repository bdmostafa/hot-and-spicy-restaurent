import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FoodDetail from './components/Foods/FoodDetail';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();


function App() {
  const [categoryName, setCategoryName] = useState('lunch');
  const [foodItems, setFoodItems] = useState([]);
  return (
    <UserContext.Provider value={{
      category: [categoryName, setCategoryName],
      food: [foodItems, setFoodItems]
    }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/foods/:categoryName/:foodId">
            <FoodDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
