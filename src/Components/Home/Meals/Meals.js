import React from 'react';
import "./Meals.css";
import { Container, Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Meals = () => {
    return (
      <section className="meal-section py-5">
        <Container>
          <Row>
            <div className="text-center mx-auto mb-5">
              <NavLink
                activeClassName="activeMeal"
                className="foodNav"
                to="/breakfast"
              >
                Breakfast
              </NavLink>
              <NavLink
                activeClassName="activeMeal"
                to="#lunch"
                className="foodNav"
                to="/lunch"
              >
                Lunch
              </NavLink>
              <NavLink
                activeClassName="activeMeal"
                to="#dinner"
                className="foodNav"
                to="/dinner"
              >
                Dinner
              </NavLink>
            </div>
          </Row>
        </Container>
      </section>
    );
};

export default Meals;