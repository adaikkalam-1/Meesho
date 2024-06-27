import React, { useEffect, useState } from "react";
import "./products.css";
import { CiHeart, CiStar } from "react-icons/ci";
import axios from "axios";
import { cartDatas } from "../../store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [cartData, setCartData] = useState([]);
  const [cartDataList, setCardDataList] = useState([]);
  const [allData,setAllData]=useState();
  const [filterData,setFilterData]=useState()


const dispatch=useDispatch()
const navigate=useNavigate()
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100").then((res) => {
      setAllData(res.data.products)
      let Datas = [];
      for (let i = 0; i < res.data.products.length; i++) {
        if (!Datas.length) {
          Datas.push(res.data.products[i]);
        } else {
          const isPresent = Datas.find(
            (Data) => Data.category === res.data.products[i].category
          );
          if (!isPresent) {
            Datas.push(res.data.products[i]);
          }
        }
      }
      const products = res.data.products;
      setCartData(products);
     dispatch(cartDatas(Datas))
      setCardDataList(Datas);
    });
  }, []);
  console.log(allData)
  const handleClick=(data)=>{
    
    const result= allData.filter((element)=>{
      return element.category == data.category
    })
    setFilterData(result)
    console.log("result",result)

    console.log("welcone",data)

  }
  const handleDataClick=()=>{
    navigate("/cart")
  }

  return (
     
    <div className="cart_container">
      {cartDataList.map((data) => (
        <div className="container" key={data.id} >
          <div className="image_container" onClick={()=>handleDataClick(data)}>
            <img src={data.thumbnail} alt="" className="img_data"  onClick={()=>handleClick(data)}/>
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
