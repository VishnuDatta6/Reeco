import React from "react";
import "../scss/custom.scss";
import { useAppSelector } from "../store/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faBottleWater, faSnowflake, faCarrot, faCakeCandles, faDrumstickBite, faBowlFood, faLeaf } from "@fortawesome/free-solid-svg-icons";
import Table from "./Table";

const Main = () => {
  const { orders } = useAppSelector((state) => state.ordersReducer);
  const { supplier, shippingdate, total, department, status } =  orders;
  return (
    <div className="">
      <header className="px-5 py-3 mb-5" id="banner">
        <div>
        <nav style={{}} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Orders</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
        </div>
        <div className="d-flex justify-content-between">
        <h1>{"Order Number"}</h1>
        <span>
          <button
            type="button"
            className="btn btn-outline-success rounded-pill px-4 mx-3"
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-success rounded-pill px-4 mx-3"
          >
            Approve order
          </button>
        </span>
        </div>
      </header>
      <div className="mx-5 p-4 border border-1 border-secondary-subtle rounded-4">
        <div className="row">
          <div className="col-2">
            <h5>Supplier</h5>
            <strong>{supplier}</strong>
          </div>
          <div className="col-2">
            <h5>Shipping date</h5>
            <strong>{shippingdate}</strong>
          </div>
          <div className="col-2">
            <h5>Total</h5>
            <strong>${total}</strong>
          </div>
          <div className="col-2">
            <h5>Category</h5>
            <div>
            <FontAwesomeIcon icon={faAppleWhole} size='xl' style={{color: "#727274",}}/>
            <FontAwesomeIcon icon={faBottleWater} size='xl' style={{color: "#727274",}}/>
            <FontAwesomeIcon icon={faSnowflake} size='xl' style={{color: "#727274",}}/>
            <FontAwesomeIcon icon={faBowlFood} size='xl' style={{color: "#727274",}}/>
            <FontAwesomeIcon icon={faCarrot} size='xl' style={{color: "#727274",}}/>
            <FontAwesomeIcon icon={faDrumstickBite} size='xl' style={{color: "#727274",}}/>
            <FontAwesomeIcon icon={faCakeCandles} size='xl' style={{color: "#727274",}}/>
            <FontAwesomeIcon icon={faLeaf} size='xl' style={{color: "#727274",}}/>
            </div>
          </div>
          <div className="col-2">
            <h5>Department</h5>
            <strong>{department}</strong>
          </div>
          <div className="col-2">
            <h5>Status</h5>
            <strong>
              {status === "awaiting" ? "Awaiting your approval" : ""}
            </strong>
          </div>
        </div>
      </div>
      <section>
        <Table />
      </section>
    </div>
  );
};

export default Main;
