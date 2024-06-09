import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

import "./manage.scss";
import Modal from "../../components/modal/Modal";

const API__URL = "http://localhost:4000/products";

const Manage = () => {
  const [data, setData] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(API__URL)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [reload]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure delete")) {
      fetch(`${API__URL}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        setReload((p) => !p);
      });
    }
  };

  let products = data
    ?.map((product) => (
      <div className="manage__card">
        <div className="manage__card__img">
          <img src={product?.image} alt={product.title} />
        </div>
        <div className="manage__card__info">
          <h3 className="manage__card__title">{product.title}</h3>
          <p className="manage__card__text">{product.category}</p>
          <div className="manage__card__price">
            {product.price.newPrice < product.price.oldPrice ? (
              <p className="manage__card__span">${product.price.oldPrice}</p>
            ) : (
              <></>
            )}
            <span>${product.price.newPrice}</span>
          </div>
          <div className="manage__card__btns">
            <button>
              <FaEdit />
            </button>
            <button onClick={() => handleDelete(product.id)}>
              <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      </div>
    ))
    .reverse();

  return (
    <>
      <section className="manage">
        <div className="container manage__container">{products}</div>
      </section>

      <Modal />
    </>
  );
};

export default Manage;
