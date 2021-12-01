import styled from "styled-components";
import { media } from "../../styles";
import { setColor, setFlex } from "../../styles";

export const ProductMain = styled.main`
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
  padding: 1rem 0;
`;
export const FilterBtn = styled.a`
  display: inline-block;
  cursor: pointer;
  border: 1px solid;
  font-size: 12px;
  border-radius: 8px;
  padding: 8px;
  margin: 0 0.2rem;
  ${media.tablet`
  margin: 0 0.5rem;
  `}
  &:active {
    background-color: ${setColor.gold};
    transition: 0.2s ease;
  }
`;
