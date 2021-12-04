import React from "react";
// import "./CartPage.scss";
import { useCart, useCartActions } from "../../context/CartProvider";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  CartHeader,
  CartList,
  CartSummary,
  CartItem,
  CartEmpty,
  CartWrapper,
  SummaryItem,
  CartMain,
} from "./Cart.style";
import { PrimaryBtn } from "../../components/Global/Buttons";
import { useQuery } from "../../hooks/useQuery";

const CartPage = () => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const matchesSM = useMediaQuery("(max-width: 900px)");
  const { cart, total, post } = useCart();
  const dispatch = useCartActions();
  const decreamentHandler = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };
  const increamentHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <CartMain className="container">
      {cart.length ? (
        <CartWrapper>
          <CartSummary>
            <h5 className="title">جمع کل سبد خرید</h5>
            <SummaryItem>
              <div className="frist">
                <p className="title">جمع جزء</p>
                <p>{total}</p>
              </div>
              <div className="second">
                <FormControl component="fieldset">
                  <FormLabel component="legend" className="title">
                    حمل و نقل
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="controlled-radio-buttons-group"
                  >
                    <FormControlLabel
                      onClick={() => dispatch({ type: "REGULER_POST" })}
                      value="reguler"
                      control={<Radio />}
                      className="desc"
                      label="تیپاکس (پس کرایه - زمان تحویل 24 الی 72 ساعت)"
                    />
                    <FormControlLabel
                      onClick={() => dispatch({ type: "SPECIAL_POST" })}
                      className="desc"
                      value="special"
                      control={<Radio />}
                      label="پست پیشتاز (زمان تحویل ۳ الی ۴ روز کاری)"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="third">
                <h2> جمع نهایی :</h2>
                <h2>{total + post}</h2>
              </div>
            </SummaryItem>
            <Link
              to="/signup?redirect=/checkout"
              // to={`/signup?redirect=${checkout}`}
            >
              <PrimaryBtn>ادامه جهت تسویه</PrimaryBtn>
            </Link>
          </CartSummary>

          <CartList>
            <CartHeader>
              <p className="title">جمع + تخفیف</p>
              <p className="title">تعداد</p>
              <p className="title">قیمت</p>
              {matchesSM ? undefined : (
                <p className="title" style={{ width: "30%" }}>
                  نام
                </p>
              )}
              <p className="title">محصول</p>
            </CartHeader>

            {cart.map((item) => (
              <>
                <CartItem>
                  <div className="cartPrice">
                    <p className="title">
                      تومان {item.off_price * item.quantity}
                    </p>
                  </div>
                  <div className="cartButton">
                    <button onClick={() => decreamentHandler(item)}>
                      <RemoveIcon style={{ fontSize: ".9rem" }} />
                    </button>
                    <span>{item.quantity}</span>

                    <button onClick={() => increamentHandler(item)}>
                      <AddIcon style={{ fontSize: ".9rem" }} />
                    </button>
                  </div>
                  <div className="cartPrice">
                    <p className="title">تومان {item.price}</p>
                  </div>
                  {matchesSM ? undefined : (
                    <div className="cartDesc">
                      <p className="title">{item.name}</p>
                    </div>
                  )}
                  <div className="cartImg">
                    <img src={item.image_url} />
                  </div>
                </CartItem>
              </>
            ))}
            {console.log(cart)}
          </CartList>
        </CartWrapper>
      ) : (
        <CartEmpty>
          <h2>سبد خرید شما در حال حاضر خالی است</h2>
          <Link to="/shop">
            <PrimaryBtn style={{ width: !matchesSM ? "30%" : undefined }}>
              بازگشت به فروشگاه
            </PrimaryBtn>
          </Link>
        </CartEmpty>
      )}
    </CartMain>
  );
};

export default CartPage;
