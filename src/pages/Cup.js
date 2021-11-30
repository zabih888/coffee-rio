import React, { useState } from "react";
import styled from "styled-components";
import * as dataCup from "../data";
import { useCartActions, useCart } from "../context/CartProvider";
import { media, setColor } from "../styles";

const Cup = () => {
  const dispatch = useCartActions();
  const cupAddHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <MainCup>
      <SectionCup>
        {dataCup.cupRio.map((item) => (
          <CupItem onClick={() => {cupAddHandler(item)}}>
            <CupImg>
              <img src={item.image_url} />
            </CupImg>
            <CupInfo>
              <h3>{item.name}</h3>
              <p className="cupDesc">{item.description}</p>
              <span>
                <p className="cupPrice">قیمت / کیلوگرم :</p>
                <p className="cupPrice">{item.price} تومان</p>
              </span>
            </CupInfo>
          </CupItem>
        ))}
      </SectionCup>
    </MainCup>
  );
};
export default Cup;

export const MainCup = styled.main`
  padding: 3rem 0rem;
  ${media.mobile`  
  padding: 3rem 3rem;
  `}
  ${media.mobile`  
  padding: 3rem 5rem;
  `}
`;

export const SectionCup = styled.section`
  margin-top: 4rem;
  direction: rtl;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  ${media.tablet`  
  grid-template-columns: repeat(2, 1fr);
  `};
  ${media.laptop`  
  grid-template-columns: repeat(3, 1fr);
  `};
  grid-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const CupItem = styled.div`
  border: 1px solid ${setColor.gold};
  border-radius: 10px;
  display: flex;
  padding: 20px 0;
`;

export const CupImg = styled.div`
  width: 100px;
  height: 100px;
  padding-right: 5px;

  img {
    width: 100%;
    height: auto;
  }
`;
export const CupInfo = styled.div`
 padding: 0rem 1rem;
    h3 {
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    .cupDesc {
      color: ${setColor.descColor};
      margin-bottom: 0.7rem;
      width: 90%
    }
    span {
      display: flex;
      justify-content: center;
      ${media.tablet`  
      justify-content: space-between;
  `};
      .cupPrice {
        color: ${setColor.subtitle};
      }
`;
