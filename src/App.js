import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DelivaryDetail from './components/DelivaryDetail/DelivaryDetail';
import FoodDetail from './components/Foods/FoodDetail';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [categoryName, setCategoryName] = useState('lunch');
  const [foodItems, setFoodItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{
      loggedUser: [loggedInUser, setLoggedInUser],
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
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/delivary">
            <DelivaryDetail />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
