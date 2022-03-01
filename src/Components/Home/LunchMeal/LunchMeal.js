import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Lunch from "../Lunch/Lunch";
import Category from "../Category/Category";

const LunchMeal = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("/meal.json")
      .then((res) => res.json())
      .then((data) => {
        setFood(data.lunch);
      });
  }, []);

  return (
    <Container>
      <div className="row">
        {food.map((fd) => (
          <Lunch key={fd.id} LunchFood={fd}></Lunch>
        ))}
      </div>
      <div className="row">
        <Category></Category>
      </div>
    </Container>
  );
};

export default LunchMeal;
