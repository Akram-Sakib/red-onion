import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleFood = () => {
  const { foodId } = useParams();
  const [details, setDetails] = useState({});
  console.log(foodId);

  useEffect(() => {
    fetch("/meal.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [foodId]);

  const { breakfast, lunch, dinner } = details;

   const detailsData = breakfast?.find((bf) => bf.id == foodId) ||
      lunch?.find((ln) => ln.id == foodId) ||
      dinner?.find((dn) => dn.id == foodId);

      console.log(detailsData);

  return (
    <div className="my-3">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={detailsData?.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-text">{detailsData?.name}</h5>
          <p className="card-text">{detailsData?.desc}</p>
          <p className="card-text">${detailsData?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;