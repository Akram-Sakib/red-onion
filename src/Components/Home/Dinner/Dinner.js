import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Dinner = (props) => {

    const { id, img, name, desc, price } = props.DinnerFood;
    const history = useHistory();
    console.log(props.DinnerFood);
    const handleDetailsPage = (id)=> {
      history.push(`/singlefood/${id}`);
    }

    return (
        <Col md={4} className="mb-4">
          <Card className="self_card" onClick={() => handleDetailsPage(id)}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Card.Text>{price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Dinner;