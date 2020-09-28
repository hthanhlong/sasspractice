import { Divider, Button } from "@material-ui/core";
import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__title">
          <h1>Cart</h1>
          <h4>(1 products)</h4>
        </div>

        <div className="row cart__main">
          <div className="col-lg-9 background_cartmain">
            <div className="cart__left">
              <img
                className="cart__left-img"
                src="assets/img/categori/product1.png"
                alt=""
              />
              <div className="cart__left-content">
                <div className="cart__left-content-left">
                  <h3>Green Dress with details</h3>
                  <h4>Sold by: Tiki trading</h4>
                  <h4 className="cart__button">Delete</h4>
                </div>
                <div className="cart__left-content-right">
                  <div>
                    <h3>$ 80</h3>
                    <div className="cart__price">
                      <h5 className="cart__price-old">$120</h5>
                      <Divider
                        orientation="vertical"
                        flexItem
                        style={{ margin: "0 1rem" }}
                      />
                      <h5>25%</h5>
                    </div>
                  </div>
                  <div>
                    <div className="productdetails__button-qty">
                      <button> + </button>
                      <span>1</span>
                      <button> - </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__left">
              <img
                className="cart__left-img"
                src="assets/img/categori/product1.png"
                alt=""
              />
              <div className="cart__left-content">
                <div className="cart__left-content-left">
                  <h3>Green Dress with details</h3>
                  <h4>Sold by: Tiki trading</h4>
                  <h4 className="cart__button">Delete</h4>
                </div>
                <div className="cart__left-content-right">
                  <div>
                    <h3>$ 80</h3>
                    <div className="cart__price">
                      <h5 className="cart__price-old">$120</h5>
                      <Divider
                        orientation="vertical"
                        flexItem
                        style={{ margin: "0 1rem" }}
                      />
                      <h5>25%</h5>
                    </div>
                  </div>
                  <div>
                    <div className="productdetails__button-qty">
                      <button> + </button>
                      <span>1</span>
                      <button> - </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cart__right">
              <div className="row cart__right-discount">
                <h2>Enter voucher code</h2>
                <input name="name" type="text" placeholder="Your code..." />
              </div>
              <div className="row cart__right-ordersummary">
                <div className="cart__right-ordersummary-title">
                  Order Summary
                </div>
                <div className="cart__right-ordersummary-price">
                  <span>Subtotal:</span>
                  <h3>$ 80</h3>
                </div>
                <Divider />
                <div className="cart__right-ordersummary-price">
                  <span>Order Total:</span>
                  <h2>$ 80</h2>
                </div>
              </div>
              <div className="productdetails__button-addtocart">
                <Button style={{ width: "100%" }}>Add To Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
