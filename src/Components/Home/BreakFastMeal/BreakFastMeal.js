import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Breakfast from "../Breakfast/Breakfast";
import Category from "../Category/Category";

const BreakFastMeal = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("/meal.json")
      .then((res) => res.json())
      .then((data) => {
        setFood(data.breakfast);
      });
  }, []);

  return (
    <Container>
      <div className="row">
        {food.map((fd) => (
          <Breakfast key={fd.id} breakFastFood={fd}></Breakfast>
        ))}
      </div>
      <div className="row">
          <Category></Category>
      </div>
    </Container>
  );
};

export default BreakFastMeal;
