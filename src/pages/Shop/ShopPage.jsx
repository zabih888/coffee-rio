import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCartActions } from "../../context/CartProvider.js";
import WidgetsIcon from "@mui/icons-material/Widgets";
import {PrimaryBtn} from "../../components/Global/Buttons"
import { FilterBtn, FilterMain, ProductContainer, ProductMain } from "./Shop.style.js";

const ShopPage = () => {
  const [data, setData] = useState([]);
  const [dataF, setDataF] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useCartActions();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        axios
          .get("https://api-coffee-flask.herokuapp.com/api/products")
          .then((response) => {
            setLoading(false);
            setData(response.data.data);
            setDataF(response.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handler = ({ typeFilter }) => {
    const filterProduct = data.filter((item) => item.category === typeFilter);
    setDataF(filterProduct);
  };
  const addToCartHander = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <ProductMain className="container" >
      <section className="productList">
        {dataF.map((item) => (
          <div className="product">
            <div className="productImg">
              <img src={item.image_url} />
            </div>
            <div className="productDec">
              <h5 className="productName">{item.name}</h5>
              <div className="productPriceWrapper">
                <div className="productOffPrice" style={{ display: "flex" }}>
                  <span className="discount">{item.discount}%</span>
                  <p className="price">{item.price}</p>
                </div>
                <p className="finalPrice">تومان {item.off_price}</p>
              </div>
              <PrimaryBtn
                onClick={() => addToCartHander(item)}
              >
                ادامه
              </PrimaryBtn>
            </div>
          </div>
        ))}
      </section>
      <section className="filterTitle">
        <h3>دسته بندی محصولات</h3>
        <FilterMain>
          <span>
            <WidgetsIcon />
          </span>
          <span>مرتب سازی بر اساس</span>
          <div>
            <FilterBtn onClick={() => handler({ typeFilter: "coffee" })}>
              قهوه
            </FilterBtn>
            <FilterBtn onClick={() => handler({ typeFilter: "pots" })}>
              لوازم
            </FilterBtn>
            <FilterBtn onClick={() => setDataF(data)}>همه</FilterBtn>
            {loading ? <CircularProgress className="progress" /> : undefined}
          </div>
        </FilterMain>
      </section>
    </ProductMain>
  );
};

export default ShopPage;

