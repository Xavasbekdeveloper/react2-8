import React, { memo } from "react";

import "./create.scss";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let product = Object.fromEntries(formData.entries());
    let { name, category, oldPrice, newPrice, image } = product;

    let newProduct = {
      title: name,
      category,
      price: {
        oldPrice,
        newPrice,
      },
      image,
    };

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then((res) => console.log(res));

    navigate("/manage");

    e.target.reset();
  };

  return (
    <section className="create">
      <div className="container">
        <form className="create__form" onSubmit={handleCreate} action="">
          <input type="text" name="name" placeholder="Product name" />
          <input type="text" name="category" placeholder="Product category" />
          <input
            type="number"
            name="oldPrice"
            placeholder="Product old price"
          />
          <input
            type="number"
            name="newPrice"
            placeholder="Product new price"
          />
          <input type="text" name="image" placeholder="Product image" />
          <button>Create</button>
        </form>
      </div>
    </section>
  );
};

export default memo(Create);
