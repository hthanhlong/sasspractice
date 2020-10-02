import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Badge } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../ActionTypes/productAction";

const Category = (props) => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productList);

  const { result, totalProducts } = products;

  const totalPages = Math.ceil(totalProducts / 16);

  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  useEffect(() => {
    if (page) {
      dispatch(getProducts(page));
    }
  }, [page]);

  return (
    <div className="products">
      <div className="container products__background">
        <div className="row products__title">
          <h1>Products Category</h1>
        </div>
        <div className="row fillter">
          <div className="col-lg-10 d-none d-lg-block"></div>
          <div className="col-12 col-sm-12 col col-md-12 col-lg-2 fillter__item">
            <label>Sort by</label>
            <select>
              <option value="">Lastest</option>
              <option value="">New</option>
              <option value="">Old</option>
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
                {!result ? (
                  <div>Loading...</div>
                ) : (
                  result.map((item) => (
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                      <div className="product1">
                        <div className="product1__img">
                          <Link to={`/productdetails/${item.id}`}>
                            <Badge color="secondary" badgeContent="NEW">
                              <img alt="" src={item.photo} />
                            </Badge>
                          </Link>
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

                          <Link to={`/productdetails/${item.id}`}>
                            <h2 className="product1__title">
                              {item.description}
                            </h2>
                          </Link>
                          <div className="product1__price">
                            <span className="product1__price_new">
                              $ {item.newprice}
                            </span>
                            <span className="product1__price_old">
                              ${item.oldprice}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row products__pagination">
          <div className="col-12 pagination">
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              className="test"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
