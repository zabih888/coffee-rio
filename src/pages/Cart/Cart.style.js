import styled from "styled-components";
import { media, setColor, setFlex } from "../../styles";

export const MainCart = styled.main`
  padding: 7rem 1rem;
  ${media.tablet`
  padding: 7rem 5rem;
  `}
`;

export const CartWrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;
  ${media.tablet`
  flex-direction: row;
   ${setFlex({ x: "space-between", y: "start" })}
  `}
`;

export const CartSummary = styled.section`
  padding-top: 2rem;
  direction: rtl;
  display: flex;
  flex-direction: column;
  ${media.tablet`
  width: 35%;
  padding-top: 0rem;
  `}

  h5 {
    border-bottom: 2px solid ${setColor.iconColor};
  }
`;

export const SummaryItem = styled.div`
  .frist {
    padding: 1rem 0;
    ${setFlex({ x: "space-between" })};
    border-bottom: 1px solid ${setColor.iconColor};
  }
  .second {
    padding: 1.5rem 0;
  }
  .third {
    ${setFlex({ x: "space-between" })};
    padding-bottom: 1rem;
  }
`;

export const CartList = styled.section`
  flex-direction: column;
  display: flex;
  ${media.tablet`
   width: 60%;
  `}
`;

export const CartHeader = styled.div`
  display: flex;
  ${setFlex({ x: "space-between" })};
  width: 100%;
  border-bottom: 2px solid ${setColor.iconColor};
  text-align: right;
`;
export const CartItem = styled.div`
  display: flex;
  ${setFlex({ x: "space-between" })};
  width: 100%;
  border-bottom: 1px solid ${setColor.iconColor};

  .cartPrice {
  }
  .cartButton {
    button {
      border-radius: 5px;
      padding: 5px;
      margin-right: 0.5rem;
    }
    span {
      margin-right: 0.5rem;
    }
  }
  .cartDesc {
    width: 30%;
    direction: rtl;
  }
  .cartImg {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const CartEmpty = styled.div`
  text-align: center;
  a {
    margin-top: 3rem;
  }
`;
