import React from "react";
import { Container } from "../../Global/Container";
import { Heade, NavRight, NavLeft } from "./Header.style";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const matchesTablet = useMediaQuery("(min-width: 768px)");

  return (
    <Heade>
      {matchesTablet ? (
        <NavRight>
          <div className="logo">
            <img src={logo} />
          </div>
          <ul>
            <li>
              <Link to="/shop">فروشگاه</Link>
            </li>
            <li>
              <Link to="/cup">کاپ ریو</Link>
            </li>
            <li>
              <Link to="/shop">فروشگاه</Link>
            </li>
            <li>
              <Link to="/cup">کاپ ریو</Link>
            </li>
          </ul>
        </NavRight>
      ) : (
        <div>
          <span>
            <MenuIcon className="icon" />
          </span>
          <span>
            <SearchIcon className="icon" />
          </span>
        </div>
      )}
      {!matchesTablet ? (
        <div className="logo">
          <img src={logo} />
        </div>
      ) : undefined}
      <NavLeft>
        {!matchesTablet ? (
          <span>
            <PersonIcon className="icon" />
          </span>
        ) : (
          <Link to="/login">عضویت / ورورد</Link>
        )}

        <Link to="/cart">
          <span>
            <ShoppingCartIcon className="icon" />
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
