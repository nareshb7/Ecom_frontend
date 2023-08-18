import React, { useState, useEffect } from 'react';
import { Link,Redirect } from 'react-router-dom';

import { getCart } from './cartHelpers';
import Card1 from './Card1';
import Checkout from './Checkout';
import Menu from './Menu';
import { getProducts } from "../core/apiCore";
 import ShowImageProd from "./ShowImageProd";
import { Button } from "@material-ui/core";
import Copyright from './Copyright';
import { addItem, updateItem, removeItem } from './cartHelpers';

const Cart = ({product,products}) => {
 
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
    const [count,setCount] = useState(1)
    const [error, setError] = useState([]);
   
       

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  
 

  

  const showItems = (items) => {
    return (
      <>
      <div style={{ padding: 25 }}>
              <Menu />
            </div>
            <div
              className="container my-4 pt-2"
              style={{
                
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="row">
                <div className="col-12 col-md-10">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Your cart</h2>
                    
                  </div>
                  <hr />
                  {/* {items.length > 0 ? showItems(items) : noItemsMessage()} */}
                  <div className="row p-1">
                    {items.map((product, i) => (
                      <div
                        key={i}
                        className="col-12 col-md-7 my-2 clor p-1"
                        style={{ margin: "0 auto" }}
                      >
                        <div className="card">
                             
                          <div className="wrapper d-flex">
                            <div
                              className="card_img"
                              style={{
                                borderRadius: "5px",
                                backgroundColor: "rgb(169 181 196 / 28%)",
                                height: "240px",
                                width: "200px",
                                marginRight: "1rem",
                              }}
                            >
                                               
                                               <Button
                                  onClick={() => {
                                    removeItem(product._id);
                                    setRun(!run); // run useEffect in parent Cart
                                  }}
                                  
                                >
                                  <h4 style={{ cursor: "pointer",marginLeft:"27rem" }}>❌</h4>
                                </Button>
                              <ShowImageProd item={product} url="product" />

                                
                            </div>
                            <div
                              className="cart-one"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                // justifyContent: "space-around",
                                gap: "1rem",
                              }}
                            >
                              <h5 className="mt-3 cart-h5">{product.name}</h5>
                              <h6>
                                Color:{" "}
                                <span
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    marginLeft: "0.4rem",
                                  }}
                                >
                                  Maroon
                                </span>{" "}
                              </h6>
                              <h6>
                                Size:{" "}
                                <span
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    marginLeft: "0.4rem",
                                  }}
                                >
                                  XXl
                                </span>{" "}
                              </h6>
                              <div className="d-flex justify-content-between align-items-center cart-incr">
                                <div
                                  style={{
                                    border: "1px solid #e3e3e3",
                                    fontSize: "18px",
                                    padding: "0px",
                                    fontWeight: "bolder",
                                  }}
                                >
                                  <Button onClick={() =>{
                                    setCount(count-1)
                                  }}> &ndash;</Button>
                                  <span>{count}</span>
                                  <Button onClick={() =>{
                                    setCount(count+1)
                                  }}>+</Button>
                                </div>
                                <div
                                  className="cart-pricing"
                                  style={{ marginLeft: "6rem" }}
                                >
                                  <h6>Rs.{product.price}</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
                </div>
      </>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to='/shop'>Continue shopping</Link>
    </h2>
  );

  return (
    <
    >
      <div className='row'>
        
        <div className='col-md-4'>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
         {/*<div className='col-md-4'> 
          <h2 className='mb-4'>Your cart summary</h2>
          <hr />
          <Checkout products={items} setRun={setRun} run={run} />
  </div> */}
       
      </div>
      
                  {/* <h2 className="mb-4">Your cart summary</h2> */}
                 <hr />
                <div
                   
                    style={{ margin: "0 auto" }}
                  >
                    <div className="d-flex justify-content-between">
                      <h5>   Total :</h5>
                      <span></span>
                    </div>
                    
                  </div>
                  <div
                    className="col-12 col-md-7 my-2 px-3"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="">
                      <h6 className="my-4">
                        Note: We are currently available only for bangalore.
                      </h6>
                    </div>

                    <div className="card-header py-3">
                  <h4 className="mb-0">Contact Information</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" novalidate>
                    
                      <div className="col-12 my-1">
                        <label for="firstName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="pinto kumar"
                          value=""
                          required
                        />
                         <div className="invalid-feedback">
                          please provide a valid name.
                        </div>

                        </div>

                        <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="only available for bangalore"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>


                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder="eg-560097"
                          required
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      
                    </div>
                    
                        
                        </form>
                        </div>

                    <div
                      className="d-flex justify-content-between bg-dark pt-3 pb-0 px-3 align-items-center " 
                      style={{ color: "#fff", cursor: "pointer" }}
                    >
                      <div>
                        <h5>Proceed To Checkout</h5>
                        
                      </div>
                      <div>&#8658;</div>
                    </div>
                  </div>
                 

  
              
            <Copyright />
    </>
  );
};

export default Cart;


