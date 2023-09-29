import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  console.log(id);

  const [shirt_, setShirt_] = useState("");

  useEffect(() => {
    fetch(`https://tshirt-server-d7ops1uhg-suvrodev.vercel.app/tshirt/${id}`)
      .then((res) => res.json())
      .then((data) => setShirt_(data));
  }, []);

  console.log(shirt_);
  const {gender,index,name,picture,price}=shirt_

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
        <figure>
          <img src={picture} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{index}</div>
            <div className="badge badge-outline">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
