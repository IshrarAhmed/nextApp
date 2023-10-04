import withAuth from "@/hoc/withAuth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

 function checkOut() {
  const cartData = useSelector((state: any) => state.cart.cartitem);
  const userDetails = useSelector((state: any) => state.user.userRegistration);
  const [isApply, setIsApply] = useState<boolean>(false);

  //  const totalPrice = cartData.reduce(
  //     (total:any, item:any) => total + item.price * item.quantity,
  //     0
  //   );
  const totalPrice = cartData.reduce((total: any, item: any) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container">
      <main>
        {/* <div className="py-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width={72}
          height={57}
        />
        <h2>Checkout form</h2>
        <p className="lead">
          Below is an example form built entirely with Bootstrap’s form controls.
          Each required form group has a validation state that can be triggered by
          attempting to submit the form without completing it.
        </p>
      </div> */}
        <div className="row g-5 mt-3 mb-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {cartData.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cartData &&
                cartData.map((item: any, index: number) => {
                  return (
                    <li
                      className="list-group-item d-flex justify-content-between lh-sm"
                      key={index}
                    >
                      <div>
                        <h6 className="my-0">{item?.title}</h6>
                        <small className="text-muted">
                          {item?.description?.substring(0, 50)}
                        </small>
                      </div>
                      <span className="text-muted">
                        ${item?.price * item?.quantity}
                      </span>
                    </li>
                  );
                })}

              <li className="list-group-item d-flex justify-content-between bg-light">
                <div
                  className={isApply ? "text-success" : "text-danger"}
                  onClick={() => {
                    if (!isApply) {
                      setIsApply(true);
                    } else {
                      setIsApply(false);
                    }
                  }}
                >
                  {!isApply ? (
                    <>
                      {" "}
                      <h6 className="my-0 danger">Promo code</h6>
                      <small>Apply Promo Code</small>
                    </>
                  ) : (
                    <>
                      {" "}
                      <h6 className="my-0">Promo code</h6>
                      <small>Applied</small>
                    </>
                  )}
                </div>
                <span className={isApply ? "text-success" : "text-danger"}>
                  −$5
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>
                  $
                  {!isApply ? totalPrice.toFixed(2) : totalPrice.toFixed(2) - 5}
                </strong>
              </li>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    defaultValue={userDetails.firstName}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    defaultValue={userDetails.lastName}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      defaultValue={userDetails.email}
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="text" className="form-label">
                    Phone Number <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    //   placeholder="you@example.com"
                    defaultValue={userDetails?.phoneNumber}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    //   placeholder="1234 Main St"
                    defaultValue={userDetails.address}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                {/* <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div> */}
                {/* <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select className="form-select" id="country">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div> */}
                {/* <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select className="form-select" id="state" >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div> */}
                {/* <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
       
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div> */}
              </div>
              {/* <hr className="my-4" />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
              />
              <label className="form-check-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div> */}
              {/* <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              />
              <label className="form-check-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div> */}
              {/* <hr className="my-4" />
            <h4 className="mb-3">Payment</h4> */}
              {/* <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
         
                />
                <label className="form-check-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
  
                />
                <label className="form-check-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
     
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div> */}
              {/* <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
  
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
        
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
              
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
      
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div> */}
              {/* <hr className="my-4" /> */}
              {/* <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button> */}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default withAuth(checkOut);
