import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCartActions } from "../../context/CartProvider.js";
import { media } from "../../styles";
import styled from "styled-components";
import { setColor, setFlex } from "../../styles";
import WidgetsIcon from "@mui/icons-material/Widgets";
import {PrimaryBtn} from "../../components/Global/Buttons"

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
    <ProductContainer>
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
                  <span className="discount">%۱۰</span>
                  <p className="price">{item.price}</p>
                </div>
                <p className="finalPrice">تومان{item.off_price}</p>
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
          <div className="filterButton">
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
    </ProductContainer>
  );
};

export default ShopPage;

export const ProductContainer = styled.main`
  padding: 7rem 0.75rem;
  display: flex;
  flex-direction: column-reverse;

  .productList {
    display: grid;
    margin: auto;
    width: 100%;
    grid-gap: 1rem;
    grid-template-columns: repeat(1fr);
    ${media.mobile`
    grid-row-gap: 1rem;
    grid-gap: 1rem;
    grid-template-columns: repeat( auto-fit, minmax(270px, 1fr) );
    `}
    ${media.tablet`
    padding: 3rem 5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;`}
    ${media.laptop`
    grid-template-columns: repeat(3, 1fr);
    `}
    ${media.desktop`
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-row-gap: 2rem;
    grid-gap: 4rem;`}

    .product {
      display: flex;
      flex-direction: row-reverse;
      ${media.laptop`
       flex-direction: column;
      `}
      justify-content: space-between;
      box-shadow: 1px 1px 15px rgb(0 0 0 / 15%);
      background-color: ${setColor.white};
      padding: 1rem 0;

      .productImg {
        width: 50%;
        ${media.laptop`
         width: 100%
       `}
        img {
          width: 100%;
          height: 100%;
        }
      }
      .productDec {
        padding: 10px;
        flex-direction: column;
        ${setFlex({ x: "space-between" })}
      }
      .productName {
        color: ${setColor.descColor};
      }
      .productPriceWrapper {
        ${media.laptop`
        width: 100%;
        ${setFlex({ x: "space-between" })}
      `}
      }
      .productOffPrice {
        line-height: 1.833;
        font-size: 0.757rem;

        .discount {
          background-color: ${setColor.gold};
          color: ${setColor.white};
          padding: 1px 5px 0;
          border-radius: 30%;
        }
        .price {
          color: ${setColor.iconColor};
          text-decoration: line-through;
          font-size: 0.8rem;
          margin-left: 0.5rem;
        }
      }
      .finalPrice {
        margin: 0.5rem 0;
      }
    }
  }
  .filterTitle {
    text-align: center;

    h3 {
      border-bottom: 1px solid ${setColor.iconColor};
      padding-bottom: 0.5rem;
      line-height: 1.5;
    }
    }
  }
`;

export const FilterMain = styled.main`
  display: flex;
  align-items: center;
  direction: rtl;
padding:1rem 0 ;
  ${media.tablet`
  padding: 0rem 5rem;
    `}
  .filterButton {
  }
`;
export const FilterBtn = styled.a`
  display: inline-block;
  border: 1px solid;
  font-size: 12px;
  border-radius: 8px;
  padding: 8px;
  margin: 0 0.2rem;
  ${media.tablet`
  margin: 0 0.5rem;
    `}
`;
