import React from "react";
import { Badge, Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

const Home = () => {
  return (
    <div className="container-fluid">
      <section className="row home">
        <div className="home__background">
          <div className="home__content d-flex justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="d-none d-lg-block home__img">
                <img src="/assets/img/hero/hero_man.png"></img>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="home__text">
                <p className="text_discount">60% Discount</p>
                <h1>
                  Winter <br />
                  Collection
                </h1>
                <h3>Best Cloth Collection by 2020!</h3>
                <Link>
                  <Button variant="contained" color="primary">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="category">
              <div className="category__title">
                <h1 className="col-12">Shop by Category</h1>
              </div>
              <div className="row category__content">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <div className="category__content_card">
                    <img
                      className="card_img"
                      src="/assets/img/categori/cat1.jpg"
                    />
                    <div className="card_text">
                      <h2>Owmen'S</h2>
                      <Link>
                        <div>Best New Deals</div>
                      </Link>
                      <span>New Collection</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <div className="category__content_card">
                    <img
                      className="card_img"
                      src="assets/img/categori/cat2.jpg"
                    />
                    <div className="card_text">
                      <h2>Winter</h2>

                      <Link>
                        <div>Best New Deals </div>
                      </Link>
                      <span>New Collection</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                  <div className="category__content_card">
                    <img
                      className="card_img"
                      src="/assets/img/categori/cat3.jpg"
                    />
                    <div className="card_text">
                      <h2>Man'S</h2>
                      <Link>
                        <div>Best New Deals </div>
                      </Link>
                      <span>New Collection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="products">
          <div className="row products__title">
            <h1>Products Lastest</h1>
            <ul>
              <li>
                <Link>Lastest</Link>
              </li>
              <li>
                <Link>All</Link>
              </li>
              <li>
                <Link>New</Link>
              </li>
            </ul>
          </div>
          <Divider />
          <div className="row products__lists">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="product">
                <div className="product_img">
                  <Badge color="secondary" badgeContent="NEW">
                    <img src="assets/img/categori/product1.png" />
                  </Badge>
                </div>
                <ul className="product__content">
                  <li className="product__star">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </li>
                  <li className="product__title">
                    <h2>Green Dress with details</h2>
                  </li>
                  <li className="product__price">
                    <span className="product__price_new">$40</span>
                    <span className="product__price_old">$90</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="product">
                <div className="product_img">
                  <img src="assets/img/categori/product1.png" />
                </div>
                <ul className="product__content">
                  <li className="product__star">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </li>
                  <li className="product__title">
                    <h2>Green Dress with details</h2>
                  </li>
                  <li className="product__price">
                    <span className="product__price_new">$40</span>
                    <span className="product__price_old">$90</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="product">
                <div className="product_img">
                  <img src="assets/img/categori/product1.png" />
                </div>
                <ul className="product__content">
                  <li className="product__star">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </li>
                  <li className="product__title">
                    <h2>Green Dress with details</h2>
                  </li>
                  <li className="product__price">
                    <span className="product__price_new">$40</span>
                    <span className="product__price_old">$90</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="product">
                <div className="product_img">
                  <img src="assets/img/categori/product1.png" />
                </div>
                <ul className="product__content">
                  <li className="product__star">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </li>
                  <li className="product__title">
                    <h2>Green Dress with details</h2>
                  </li>
                  <li className="product__price">
                    <span className="product__price_new">$40</span>
                    <span className="product__price_old">$90</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="bestproduct__background">
          <div className="row">
            <div className="d-none d-lg-block col-lg-5 col-xl-5">
              <div className="bestproduct_img">
                <img src="assets/img/categori/card-man.png" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="bestproduct_content">
                <h1>Find The Best Product from Our Shop</h1>
                <p>Designers who are interesten creating state ofthe.</p>
                <div>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
            <div className="bestproduct_icon">
              <img src="assets/img/categori/card-shape.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
