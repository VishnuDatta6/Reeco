import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { editProductDetails } from "../store/order";
import { Items } from "../interfaces/interfaces";
import Img from "../assests/Avocado Hass.jpg";

interface Props {
  item: Items;
  index: number;
}

const EditModal: React.FC<Props> = ({ item, index }) => {
  const dispatch = useAppDispatch();
  const { productname, brand, price, quantity } = item;
  const [details, setDetails] = useState({ price: price, quantity: quantity });

  const handleChange = (e: any) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const body = {
      index: index,
      price: details.price,
      quantity: details.quantity,
      total: details.price * details.quantity,
      status: "",
    };
    if (price !== details.price && quantity !== details.quantity) {
      dispatch(editProductDetails({ ...body, status: "pq-updated" }));
    }
    if (price === details.price && quantity !== details.quantity) {
      dispatch(editProductDetails({ ...body, status: "q-updated" }));
    }
    if (price !== details.price && quantity === details.quantity) {
      dispatch(editProductDetails({ ...body, status: "p-updated" }));
    }
  };

  useEffect(() => {
    setDetails({ price: price, quantity: quantity });
  }, [price, quantity]);

  return (
    <div
      className="modal fade"
      id="editItemModal"
      tabIndex={-1}
      aria-labelledby="editItemModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div style={{ textAlign: "left" }}>
              <h2>{productname.substring(0, 55) + "..."}</h2>
              <p>{brand}</p>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex">
              <img
                style={{ width: "10rem" }}
                src={Img}
                alt="product-representation"
              />
              <div className="text-start mx-5">
                <label className="form-label">
                  Price($){" "}
                  <input
                    className="ms-5 col-form-control"
                    type="number"
                    name="price"
                    value={details.price}
                    onChange={(e) => handleChange(e)}
                  />{" "}
                  /6 + 1LB
                </label>
                <label className="form-label">
                  Quantity{" "}
                  <input
                    className="ms-5 col-form-control"
                    type="number"
                    name="quantity"
                    value={details.quantity}
                    onChange={(e) => handleChange(e)}
                  />
                  &#x00D7; 6 + 1LB
                </label>
                <p>
                  <span>Total</span>{" "}
                  <span className="ms-5">
                    ${details.price * details.quantity}
                  </span>
                </p>
              </div>
            </div>
            <div className="text-start">
              <h4>Choose reason</h4>
              <div style={{ margin: "2em 0" }}>
                <span className="custom-badge">Missing Product</span>
                <span className="custom-badge">Quantity is not the same</span>
                <span className="custom-badge">Price is not the same</span>
                <span className="custom-badge">Other</span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light fw-semibold text-green"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success rounded-pill px-3 fw-semibold"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
