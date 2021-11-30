import React from "react";
import styled from "styled-components";
import { media, setColor, setFlex } from "../../../styles";

export const Heade = styled.header`
  border-bottom: 1px solid ${setColor.Black};
  direction: rtl;
  position: fixed;
  width: 100%;
  z-index: 10;
  padding: .75rem .75rem;
  ${media.tablet`
  padding: 0.75rem 5rem;
    `}
  ${setFlex({ x: "space-between", y: "center" })};
  background-color: ${setColor.backgroundColor};
  .logo {
    height: 4rem;
    margin-left: 0;
    ${media.tablet`
     margin-left: 2rem;
    `}
    img {
      width: 100%;
      height: 100%;
    }
  }
  span {
    cursor: pointer;
    .icon {
      font-size: 1.7rem;
    }
  }
`;

export const NavRight = styled.div`
  display: flex;

  ul {
    ${setFlex()};
    li {
      margin-right: 1rem;
      display: flex;
    }
  }
`;

export const NavLeft = styled.div`
  ${setFlex()}
  height: 4rem;
`;
