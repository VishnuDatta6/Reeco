import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Img from "../assests/Avocado Hass.jpg";
import { updateProductStatus } from "../store/order";
import { Items } from "../interfaces/interfaces";
import EditModal from "./EditModal";

const Table = () => {
  const { orders } = useAppSelector((state) => state.ordersReducer);
  const dispatch = useAppDispatch();
  const [missingItem, setMissingItem] = useState<number>(0);
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [editProduct, setEditProduct] = useState<Items>({
    img: "",
    productname: "",
    brand: "",
    price: 0,
    quantity: 0,
    total: 0,
    status: "",
  });
  const [index, SetIndex] = useState<number>(0);

  const renderMissingModal = (index: number) => {
    const productname = orders.items[index]
      ? orders.items[index].productname
      : "";
    return (
      <div
        className="modal fade "
        id="missingItemModal"
        tabIndex={-1}
        aria-labelledby="missingItemModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Missing Product</h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Is {productname.substring(0, 32) + "..."} urgent ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light fw-semibold"
                data-bs-dismiss="modal"
                onClick={() =>
                  dispatch(updateProductStatus({ index, status: "missing" }))
                }
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-light fw-semibold"
                data-bs-dismiss="modal"
                onClick={() =>
                  dispatch(
                    updateProductStatus({ index, status: "missing-urgent" })
                  )
                }
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStatus = (str: string) => {
    switch (str) {
      case "approved":
        return (
          <span className="badge rounded-pill text-bg-success px-4 py-3">
            Approved
          </span>
        );
      case "missing":
        return (
          <span className="badge rounded-pill text-bg-orange px-4 py-3">
            Missing
          </span>
        );
      case "missing-urgent":
        return (
          <span className="badge rounded-pill text-bg-danger px-4 py-3">
            Missing - Urgent
          </span>
        );
      case "pq-updated":
        return (
          <span className="badge rounded-pill text-bg-success px-4 py-3">
            Quantity and Price Updated
          </span>
        );
      case "p-updated":
        return (
          <span className="badge rounded-pill text-bg-success px-4 py-3">
            Price Updated
          </span>
        );
      case "q-updated":
        return (
          <span className="badge rounded-pill text-bg-success px-4 py-3">
            Quantity Updated
          </span>
        );
      default:
        return <span></span>;
    }
  };

  const renderCrossButtonColor = (str: string) => {
    switch (str) {
      case "missing":
        return { color: "orange", fontWeight: "bold" };
      case "missing-urgent":
        return { color: "red", fontWeight: "bold" };
      default:
        return {};
    }
  };

  const renderRightButtonColor = (str: string) => {
    switch (str) {
      case "":
        return {};
      case "missing":
        return {};
      case "missing-urgent":
        return {};
      default:
        return { color: "green !important", fontWeight: "bold" };
    }
  };

  return (
    <div className="mx-5 border border-secondary-subtle p-5 mt-5 rounded-4">
      <div className="d-flex justify-content-between mb-4">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 rounded-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </form>
        <span>
          <button
            className="btn btn-outline-success rounded-pill px-4 mx-4"
            type="submit"
          >
            Add item
          </button>
          <FontAwesomeIcon
            className="mx-4"
            icon={faPrint}
            style={{ color: "#0e863c" }}
            size="2xl"
          />
        </span>
      </div>
      <table className="table">
        <thead className="border border-secondary-subtle rounded-top-3 ">
          <tr className="text-start">
            <th scope="col"></th>
            <th style={{ width: "32rem" }} scope="col">
              Product name
            </th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col" className="total">
              Total
            </th>
            <th scope="col" className="status">
              Status
            </th>
            <th style={{ width: "200px" }} scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orders.items
            .filter((item) =>
              searchProduct ? item.productname.includes(searchProduct) : item
            )
            .map((item, index) => (
              <tr className="align-middle text-start" key={index}>
                <td>
                  <img
                    className="product-image"
                    src={Img}
                    alt="product-representation"
                  />
                </td>
                <td style={{ width: "32rem" }}>{item.productname}</td>
                <td>{item.brand}</td>
                <td>${item.price} / 6+1LB</td>
                <td>
                  <strong>{item.quantity}</strong>&#x00D7; 6 + 1LB
                </td>
                <td className="total">${item.total}</td>
                <td className="status">{renderStatus(item.status)}</td>
                <td style={{ width: "200px" }}>
                  <button
                    type="button"
                    className="btn btn-outline-light text-black"
                    onClick={() => {
                      dispatch(
                        updateProductStatus({ index, status: "approved" })
                      );
                    }}
                    style={renderRightButtonColor(item.status)}
                  >
                    &#10003;
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light text-black"
                    data-bs-toggle="modal"
                    data-bs-target="#missingItemModal"
                    onClick={() => {
                      setMissingItem(index);
                    }}
                  >
                    <span style={renderCrossButtonColor(item.status)}>
                      &#10005;
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light text-black"
                    data-bs-toggle="modal"
                    data-bs-target="#editItemModal"
                    onClick={() => {
                      setEditProduct((prev) => item);
                      SetIndex((prev) => index);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {renderMissingModal(missingItem)}
      {<EditModal item={editProduct} index={index} />}
    </div>
  );
};

export default Table;
