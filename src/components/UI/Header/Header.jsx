import React, { useState } from "react";
import {
  Heade,
  NavLeft,
  IconRight,
  Nav,
  SideList,
  SlideItem,
  MenuItemSlide,
} from "./Header.style";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  List,
  ListItem,
  MenuItem,
  SwipeableDrawer,
  useMediaQuery,
} from "@mui/material";
import { useCart } from "../../../context/CartProvider";

const Header = () => {
  const matchesTablet = useMediaQuery("(min-width: 768px)");
  const { cart } = useCart();
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenuShop, setOpenMenuShop] = useState(false);
  const handleToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Heade>
      {matchesTablet ? (
        <>
          <Nav>
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <ul>
              <li>
                <Link to="/shop">فروشگاه</Link>
              </li>
              <li>
                <Link to="/cup">کاپ ریو</Link>
              </li>
            </ul>
          </Nav>
        </>
      ) : (
        <>
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={handleToggle}
            onOpen={handleToggle}
            anchor="right"
            dir="rtl"
          >
            <Link to="/" style={{ margin: " 0 auto" }}>
              <img src={logo} />
            </Link>
            <SideList>
              <SlideItem
                divider
                button
                onClick={() => {
                  setOpenDrawer(!openDrawer);
                }}
              >
                <Link to="/shop">فروشگاه</Link>
                <span onClick={() => setOpenMenuShop(!openMenuShop)}>
                  <KeyboardArrowDownIcon />
                </span>
              </SlideItem>
              {openMenuShop ? (
                <div>
                  <MenuItemSlide>قهوه ترک</MenuItemSlide>
                  <MenuItemSlide>قهوه دمی</MenuItemSlide>
                  <MenuItemSlide>هورکا</MenuItemSlide>
                  <MenuItemSlide>لوازم جانبی</MenuItemSlide>
                  <MenuItemSlide>کاپ ریو</MenuItemSlide>
                  <MenuItemSlide>باندل</MenuItemSlide>
                </div>
              ) : undefined}
              <ListItem
                divider
                button
                onClick={() => {
                  setOpenDrawer(!openDrawer);
                }}
              >
                <Link to="/cup">کاپ ریو</Link>
              </ListItem>
            </SideList>
          </SwipeableDrawer>
          <IconRight>
            <span onClick={handleToggle}>
              <MenuIcon className="icon" />
            </span>
            <span>
              <SearchIcon className="icon" />
            </span>
          </IconRight>
        </>
      )}
      {!matchesTablet ? (
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
      ) : undefined}

      <NavLeft>
        {!matchesTablet ? (
          <span>
            <PersonIcon className="icon" />
          </span>
        ) : (
          <Link to="/login">عضویت / ورود</Link>
        )}

        <Link to="/cart">
          <span className="badgeHaderWrapper">
            <ShoppingCartIcon className="icon" />
            {cart.length ? (
              <span className="badgeHader">{cart.length}</span>
            ) : undefined}
          </span>
        </Link>
        {!matchesTablet ? undefined : (
          <span>
            <SearchIcon />
          </span>
        )}
      </NavLeft>
    </Heade>
  );
};

export default Header;
