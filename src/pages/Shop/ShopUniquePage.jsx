import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  UniqueDesc,
  UniqueDescButtons,
  UniqueDescItems,
  UniqueIntro,
  UniqueMain,
  UniqueWrapper,
} from "./ShopUnique.style";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AddCardIcon from "@mui/icons-material/AddCard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router";
import {useCartActions} from "../../context/CartProvider"

const ShopUniquePage = (props) => {
  const [data, setData] = useState({});
  const [showInformation, setShowInformation] = useState();
  const [showMoreInfo, setShowMoreInfo] = useState();
  const [showDiscussion, setShowDiscussion] = useState();
  const handlerInformation = () => {
    setShowInformation(true);
    setShowMoreInfo(false);
    setShowDiscussion(false);
  };
  const handelMoreInfo = () => {
    setShowInformation(false);
    setShowMoreInfo(true);
    setShowDiscussion(false);
  };
  const handelDiscussion = () => {
    setShowInformation(false);
    setShowMoreInfo(false);
    setShowDiscussion(true);
  };

  const dispatch = useCartActions();
  const addToCartHander = (data) => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  const param = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        axios
          .get(
            `https://api-coffee-flask.herokuapp.com/api/products?id=${param.itemid}`
          )
          .then((response) => {
            setData(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <UniqueMain className="container">
      <UniqueWrapper>
        <UniqueIntro>
          <div className="img">
            <img src={data.image_url} />
          </div>
          <div className="detail">
            <h4 className="title">{data.name}</h4>
            <h4 className="price">{data.price} تومان</h4>
            <Button variant="contained" onClick={() => {addToCartHander(data)}}>افزودن به سبد خرید</Button>
            <div className="detailText">
              <span>
                <ShoppingCartCheckoutIcon />
              </span>
              <p>خرید به صورت آنلاین و ارسال پستی شرایط ارسال مرسوله</p>
            </div>
            <div className="detailText">
              <span>
                <LocalMallIcon />
              </span>
              <p>
                ارسال مرسوله های بالاتر از 300 هزار تومان فقط در شهر تهران
                رایگان خواهد بود
              </p>
            </div>
            <div className="detailText">
              <span>
                <AddCardIcon />
              </span>
              <p> خرید آنلاین با استفاده از درگاه های امن</p>
            </div>
          </div>
        </UniqueIntro>
        <UniqueDesc>
          <UniqueDescButtons>
            <Button onClick={handlerInformation}>توضیحات</Button>
            <Button onClick={handelMoreInfo}>اطلاعات بیشتر</Button>
            <Button onClick={handelDiscussion}>نظرات</Button>
          </UniqueDescButtons>
          <UniqueDescItems>
            {showMoreInfo ? (
              <div className="moreInfo">
                <ul className="label">
                  <li>وزن</li>
                  <li>محصولی از</li>
                  <li>خاستگاه</li>
                  <li>کافئین</li>
                </ul>
                <ul className="answer">
                  <li>1 کیلو</li>
                  <li>سه لایه سوپاپ دار</li>
                  <li>قهوه ریو</li>
                  <li>متوسط</li>
                </ul>
              </div>
            ) : showDiscussion ? (
              <div className="discussion">
                <h5>نقد و بررسی‌ها</h5>
                <TextField
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                  label="دیدگاه شما"
                />
                <div className="nameEmailWrapper">
                  <TextField variant="outlined" label="نام" />
                  <TextField variant="outlined" label="ایمیل" />
                </div>
                <Button variant="contained">ثبت</Button>
              </div>
            ) : (
              <div className="information">
                <p>
                  {data.description}
                </p>
              </div>
            )}
          </UniqueDescItems>
        </UniqueDesc>
      </UniqueWrapper>
    </UniqueMain>
  );
};

export default ShopUniquePage;
