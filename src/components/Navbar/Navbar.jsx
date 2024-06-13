import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import "./navbar.css";
import { CiMobile3 } from "react-icons/ci";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);

  return (
    <div>
      <div className="navbar_container">
        <div className="logo">
          <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" className="img_logo" />
        </div>
        <div className="search_input">
          <GoSearch className="search_icon" />
          <input type="text" placeholder="search" className="input_box" />
        </div>
        <div className="navbar-Link">
          <button>
            <CiMobile3 /> Download App
          </button>
          <span className="line"></span>
          <button>Become a Supplier </button> <span className="line"></span>
          <button>Newsroom</button> <span className="line"></span>
        </div>
        <div className="cart-container">
          <FaRegUser className="user-icon" />

          <FiShoppingCart />
        </div>
      </div>
      <div className="categories">
        <ul className="categories_list">
          <li
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
          >
            Women Ethnic
            {dropDown ? (
              <div
                className="product"
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
              >
                <div className="product_div1">
                  <p className="product_title">All Women Ethnic</p>
                  <li>
                    <a href="#">view All</a>
                  </li>
                </div>
                <div className="product_div2">
                  <p className="product_title">Sarees</p>

                  <li>
                    <a href="#">All Sarees</a>
                  </li>
                  <li>
                    <a href="#">Silk Sarees</a>
                  </li>
                  <li>
                    <a href="#">Cotton Silk sarees </a>
                  </li>
                </div>

                <div className="product_div3">
                  <p className="product_title"> Kurtis</p>

                  <li>
                    <a href="#">All Kurtis</a>
                  </li>
                  <li>
                    <a href="#">Anarkali Kurtis</a>
                  </li>
                  <li>
                    <a href="#">Rayon Kurtis </a>
                  </li>
                  <li>
                    <a href="#">Rayon Kurtis</a>
                  </li>
                  <li>
                    <a href="#">Embroidered Kurtis</a>
                  </li>
                </div>
                <div className="product_div4">
                  <p className="product_title"> Kurta Sets</p>

                  <li>
                    <a href="#">All Kurta Sets</a>
                  </li>
                </div>
                <div className="product_div5">
                  <p className="product_title"> Suits & Dress Material</p>

                  <li>
                    <a href="#">All Suits & Dress Material</a>
                  </li>
                  <li>
                    <a href="#">Cotton Suits</a>
                  </li>
                  <li>
                    <a href="#">Embroidered Suits </a>
                  </li>
                  <li>
                    <a href="#">Chanderi Suits</a>
                  </li>
                </div>
              </div>
            ) : (
              " "
            )}
          </li>

          <li
            onMouseEnter={() => setDropDown2(true)}
            onMouseLeave={() => setDropDown2(false)}
          >
            Women Western
            {dropDown2 ? (
              <div
                className="product"
                onMouseEnter={() => setDropDown2(true)}
                onMouseLeave={() => setDropDown2(false)}
              >
                <div className="product_div1">
                  <p className="product_title">All Women Ethnic</p>
                  <li>
                    <a href="#">view All</a>
                  </li>
                </div>
                <div className="product_div2">
                  <p className="product_title">Sarees</p>

                  <li>
                    <a href="#">All Sarees</a>
                  </li>
                  <li>
                    <a href="#">Silk Sarees</a>
                  </li>
                  <li>
                    <a href="#">Cotton Silk sarees </a>
                  </li>
                </div>

                <div className="product_div3">
                  <p className="product_title"> Kurtis</p>

                  <li>
                    <a href="#">All Kurtis</a>
                  </li>
                  <li>
                    <a href="#">Anarkali Kurtis</a>
                  </li>
                  <li>
                    <a href="#">Rayon Kurtis </a>
                  </li>
                  <li>
                    <a href="#">Rayon Kurtis</a>
                  </li>
                  <li>
                    <a href="#">Embroidered Kurtis</a>
                  </li>
                </div>
                <div className="product_div4">
                  <p className="product_title"> Kurta Sets</p>

                  <li>
                    <a href="#">All Kurta Sets</a>
                  </li>
                </div>
                <div className="product_div5">
                  <p className="product_title"> Suits & Dress Material</p>

                  <li>
                    <a href="#">All Suits & Dress Material</a>
                  </li>
                  <li>
                    <a href="#">Cotton Suits</a>
                  </li>
                  <li>
                    <a href="#">Embroidered Suits </a>
                  </li>
                  <li>
                    <a href="#">Chanderi Suits</a>
                  </li>
                </div>
              </div>
            ) : (
              " "
            )}
          </li>
          <li>Men</li>
          <li>Kids</li>
          <li>Home & Kitchen</li>
          <li>Beauty & Health</li>
          <li>Jewellery & Accessories</li>
          <li>Bags & Footwear</li>
          <li>Electronics</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
