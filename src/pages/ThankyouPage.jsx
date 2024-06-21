import React from "react";
import { Link } from "react-router-dom";

function ThankyouPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">YOUR ORDER HAS BEEN RECEIVED</h2>
            <h3 className="text-center">
              Thank you for your payment, it’s processing
            </h3>
            <p className="text-center">
              {" "}
              Note: If your payment is not successful by you, then your order
              will be cancelled automatically!
            </p>
            <br />
            <p className="text-center">
              {" "}
              Please make sure do not close any upi app untill payment is done!
            </p>
            <span id="orderNumber"></span>
            <p className="text-center">
              You will receive an order confirmation email with details of your
              order and a link to track your process.
            </p>
            <p className="text-center">
              Your Order id is {Math.round(Math.random() * 123712824212)}{" "}
            </p>
            <br />{" "}
            <center>
              <div className="btn-group" style={{ marginTop: "50px" }}>
                <Link to="/" className="btn btn-lg btn-warning">
                  CONTINUE
                </Link>
              </div>
            </center>
          </div>
        </div>
      </div>

      <footer className="seofooter" id="seofooter"></footer>
    </>
  );
}

export default ThankyouPage;
