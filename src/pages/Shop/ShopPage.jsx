import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCartActions } from "../../context/CartProvider.js";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { PrimaryShop } from "../../components/Global/Buttons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  FilterBtn,
  FilterMain,
  ProductContainer,
  ProductMain,
} from "./Shop.style.js";
import { getProducts } from "../../services/productsService.js";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [data, setData] = useState([]);
  const [dataF, setDataF] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useCartActions();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        getProducts().then((response) => {
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
  

  return (
    <ProductMain className="container">
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
              <Link to={`/shop/${item.id}`}>
                <PrimaryShop>
                  ادامه
                  <span>
                    <ArrowForwardIcon />
                  </span>
                </PrimaryShop>
              </Link>
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
