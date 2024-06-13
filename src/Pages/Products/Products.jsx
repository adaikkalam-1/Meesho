import React, { useEffect, useState } from "react";
import "./products.css";
import { CiHeart, CiStar } from "react-icons/ci";
import axios from "axios";

const Products = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100").then((res) => {
      const product = res.data.products;
      setCartData(product);
      console.log(product);
    });
  }, []);
  console.log(cartData);

  return (
    <div className="cart_container">
      {cartData.map((data) => (
        <div className="container" key={data.id}>
          <div className="image_container">
            <img src={data.thumbnail} alt="" className="img_data" />
          </div>
          <div className="cart_content">
            <p>{data.title}</p>
            <h2 className="amount">₹ {data.price}</h2>
            <p>Free Delivery</p>
          </div>
          <div className="btn_container">
            <div className="rating">
              <div className="star">
                {data.rating}
                <CiStar />
              </div>
            </div>
            <CiHeart className="heart" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
