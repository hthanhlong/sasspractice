import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Badge } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const Category = () => {
  return (
    <div className="products">
      <div className="container products__background">
        <div className="row products__title">
          <h1>Products Category</h1>
        </div>
        <div className="row fillter">
          <div className="col-lg-8"></div>
          <div className="col-lg-2 fillter__item">
            <label>Sort by</label>
            <select>
              <option value="">Lastest</option>
              <option value="">New</option>
              <option value="">Old</option>
            </select>
          </div>
          <div className="col-lg-2 fillter__item">
            <label>Size</label>
            <select>
              <option value="">All</option>
              <option value="">S</option>
              <option value="">M</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="category__left">
              <div className="category__left-content">
                <div className="category__left-title">
                  <h1>Category</h1>
                </div>
                <div className="category__left-list">
                  <ul>
                    <li>
                      <Link to="/blog">Resaurant food (37)</Link>
                    </li>
                    <li>
                      <Link to="/blog">Travel news (10)</Link>
                    </li>
                    <li>
                      <Link to="/">Modern Technology (03)</Link>
                    </li>
                    <li>
                      <Link to="/">Product (12)</Link>
                    </li>
                    <li>
                      <Link to="/">Inspiration (21)</Link>
                    </li>
                    <li>
                      <Link to="/">Healthy Care (15)</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 products1">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="product1">
                    <div className="product1__img">
                      <Badge color="secondary" badgeContent="NEW">
                        <img alt="" src="assets/img/categori/product2.png" />
                      </Badge>
                    </div>
                    <div className="product1__content">
                      <ul>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarHalfIcon />
                        </li>
                      </ul>

                      <h2 className="product1__title">
                        Green Dress with details
                      </h2>
                      <div className="product1__price">
                        <span className="product1__price_new">$40</span>
                        <span className="product1__price_old">$90</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="product1">
                    <div className="product1__img">
                      <Badge color="secondary" badgeContent="NEW">
                        <img alt="" src="assets/img/categori/product1.png" />
                      </Badge>
                    </div>
                    <div className="product1__content">
                      <ul>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarHalfIcon />
                        </li>
                      </ul>

                      <h2 className="product1__title">
                        Green Dress with details
                      </h2>
                      <div className="product1__price">
                        <span className="product1__price_new">$40</span>
                        <span className="product1__price_old">$90</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="product1">
                    <div className="product1__img">
                      <Badge color="secondary" badgeContent="NEW">
                        <img alt="" src="assets/img/categori/product3.png" />
                      </Badge>
                    </div>
                    <div className="product1__content">
                      <ul>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarHalfIcon />
                        </li>
                      </ul>

                      <h2 className="product1__title">
                        Green Dress with details
                      </h2>
                      <div className="product1__price">
                        <span className="product1__price_new">$40</span>
                        <span className="product1__price_old">$90</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="product1">
                    <div className="product1__img">
                      <Badge color="secondary" badgeContent="NEW">
                        <img alt="" src="assets/img/categori/product5.png" />
                      </Badge>
                    </div>
                    <div className="product1__content">
                      <ul>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarHalfIcon />
                        </li>
                      </ul>

                      <h2 className="product1__title">
                        Green Dress with details
                      </h2>
                      <div className="product1__price">
                        <span className="product1__price_new">$40</span>
                        <span className="product1__price_old">$90</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="product1">
                    <div className="product1__img">
                      <Badge color="secondary" badgeContent="NEW">
                        <img alt="" src="assets/img/categori/product4.png" />
                      </Badge>
                    </div>
                    <div className="product1__content">
                      <ul>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarHalfIcon />
                        </li>
                      </ul>

                      <h2 className="product1__title">
                        Green Dress with details
                      </h2>
                      <div className="product1__price">
                        <span className="product1__price_new">$40</span>
                        <span className="product1__price_old">$90</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="product1">
                    <div className="product1__img">
                      <Badge color="secondary" badgeContent="NEW">
                        <img alt="" src="assets/img/categori/product2.png" />
                      </Badge>
                    </div>
                    <div className="product1__content">
                      <ul>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarIcon />
                        </li>
                        <li className="product1__star">
                          <StarHalfIcon />
                        </li>
                      </ul>

                      <h2 className="product1__title">
                        Green Dress with details
                      </h2>
                      <div className="product1__price">
                        <span className="product1__price_new">$40</span>
                        <span className="product1__price_old">$90</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row products__pagination">
          <div className="col-12 pagination">
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              className="test"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
