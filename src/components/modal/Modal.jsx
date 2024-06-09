import React from "react";

import "./modal.scss";
const API_URL = "http://localhost:4000/products";

const Modal = ({ setShow, show, edit, setEdit, setReload }) => {
  const handleEdit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/${edit.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edit),
    }).then((response) => {
      setReload((p) => !p);
      setShow(false);
    });
  };

  return (
    <section className="modal">
      <div
        onClick={() => setShow(false)}
        className={`${show ? "modal__overlay" : ""}`}
      ></div>
      <form
        onSubmit={handleEdit}
        className={`modal__form ${show ? "show" : ""}`}
        action=""
      >
        <input
          value={edit?.title}
          onChange={(e) =>
            setEdit((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          name="name"
          placeholder="Product name"
        />
        <input
          value={edit?.category}
          onChange={(e) =>
            setEdit((prev) => ({ ...prev, category: e.target.value }))
          }
          type="text"
          name="category"
          placeholder="Product category"
        />
        <input
          value={edit?.price.oldPrice}
          onChange={(e) =>
            setEdit((prev) => ({
              ...prev,
              price: { ...prev.price, oldPrice: e.target.value },
            }))
          }
          type="number"
          name="oldPrice"
          placeholder="Product old price"
        />
        <input
          value={edit?.price.newPrice}
          onChange={(e) =>
            setEdit((prev) => ({
              ...prev,
              price: { ...prev.price, newPrice: e.target.value },
            }))
          }
          type="number"
          name="newPrice"
          placeholder="Product new price"
        />
        <input
          value={edit?.image}
          onChange={(e) =>
            setEdit((prev) => ({ ...prev, image: e.target.value }))
          }
          type="text"
          name="image"
          placeholder="Product image"
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => setShow(false)}>
          Close
        </button>
      </form>
    </section>
  );
};

export default Modal;
