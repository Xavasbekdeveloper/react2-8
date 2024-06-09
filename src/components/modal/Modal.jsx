import React from "react";

import "./modal.scss";

const Modal = () => {
  return (
    <section>
      <div className="modal__overlay">
        <form className="create__form" action="">
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

export default Modal;
