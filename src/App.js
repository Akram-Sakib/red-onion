import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Shared/Header/Header";
import BreakFastMeal from "./Components/Home/BreakFastMeal/BreakFastMeal";
import LunchMeal from "./Components/Home/LunchMeal/LunchMeal";
import DinnerMeal from "./Components/Home/DinnerMeal/DinnerMeal";
import Footer from "./Components/Shared/Footer/Footer";
import Banner from "./Components/Home/Banner/Banner";
import Meals from "./Components/Home/Meals/Meals";
import SingleFood from "./Components/Home/SingleFood.js/SingleFood";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <BreakFastMeal></BreakFastMeal>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/breakfast">
            <Banner></Banner>
            <Meals></Meals>
            <BreakFastMeal></BreakFastMeal>
          </Route>
          <Route path="/lunch">
            <Banner></Banner>
            <Meals></Meals>
            <LunchMeal></LunchMeal>
          </Route>
          <Route path="/dinner">
            <Banner></Banner>
            <Meals></Meals>
            <DinnerMeal></DinnerMeal>
          </Route>
          <PrivateRoute path="/singlefood/:foodId">
            <SingleFood></SingleFood>
          </PrivateRoute>
          <PrivateRoute path="/singlefood/:foodId">
            <SingleFood></SingleFood>
          </PrivateRoute>
          <PrivateRoute path="/singlefood/:foodId">
            <SingleFood></SingleFood>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
