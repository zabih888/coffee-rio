
import { List, ListItem, MenuItem } from "@mui/material";
import styled from "styled-components";
import { media, setColor, setFlex } from "../../../styles";

export const Heade = styled.header`
  border-bottom: 1px solid ${setColor.Black};
  direction: rtl;
  position: fixed;
  width: 100%;
  z-index: 10;
  padding: 0.75rem 0.75rem;
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

export const Nav = styled.div`
  display: flex;

  ul {
    ${setFlex()};
    li {
      margin-right: 1rem;
      display: flex;
    }
  }
`;

export const IconRight = styled.div`
  span {
    padding-left: 0.5rem;
    ${media.tablet`
     padding-left: 1rem;
    `}
  }
`;

export const NavLeft = styled.div`
  ${setFlex()}
  height: 4rem;

  span {
    margin-right: 0.5rem;
    ${media.tablet`
     margin-right: 1rem;
    `}
  }

  .badgeHaderWrapper{
    position: relative;

    .badgeHader{
      text-align: center;
      color: ${setColor.white};
      position: absolute;
      content: "";
      width: 20px;
      height: 18px;
      background-color: ${setColor.Black};
      bottom: 0;
      left: 15px;
      border-radius: 7px;
    }
  }
`;
// SIDEBAR

export const SideList = styled(List)`
 width: 50vw;
`
export const SlideItem = styled(ListItem)`
 display: flex;
 justify-content: space-between !important;
`
export const MenuItemSlide = styled(MenuItem)`
 padding-right: 20% !important;
`