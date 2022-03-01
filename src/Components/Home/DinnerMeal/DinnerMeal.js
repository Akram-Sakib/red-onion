import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Dinner from "../Dinner/Dinner";
import Category from "../Category/Category";

const DinnerMeal = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("/meal.json")
      .then((res) => res.json())
      .then((data) => {
        setFood(data.dinner);
      });
  }, []);

  return (
    <Container>
      <div className="row">
        {food.map((fd) => (
          <Dinner key={fd.id} DinnerFood={fd}></Dinner>
        ))}
      </div>
      <div className="row">
        <Category></Category>
      </div>
    </Container>
  );
};

export default DinnerMeal;
